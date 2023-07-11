export default class Store {
	constructor() {
		this.data = null;
	};
	setData(data) {
		this.data = data;
	};
	getData() {
		return this.data;
	};
};
