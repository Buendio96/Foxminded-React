import { getData } from "./components/getData.js";
import { Model, View, Controller } from "./components/shop.js";
import { BagModel, BagView, BagController } from "./components/bag.js";
import Store from "./components/store.js";

const jsonData = '/resource/stock.json';
const store = new Store();
const data = await initializing(jsonData);

async function initializing(direction) {
	try {
		const data = await getData(direction);
		store.setData(data);
		return data;
	} catch (error) {
		console.error('Error initializing app:', error);
		throw error;
	}
};

async function initShop() {
	const uniqueElement = document.getElementById('shop');
	if (uniqueElement) {
		try {
			const model = new Model(data);
			const view = new View(model);
			const controller = new Controller(view, model);
			controller.init();
		} catch (error) {
			console.error('Error initializing shop:', error);
		}
	}
};
async function initBag() {
	try {
		const bagModel = new BagModel();
		const bagView = new BagView(bagModel);
		const bagController = new BagController(bagModel, bagView, data);
		bagController.init();
	} catch (error) {
		console.error('Error initializing bag:', error);
	}
};

initShop();
initBag();