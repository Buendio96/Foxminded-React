const keyName = 'all items';
const box = document.getElementById('listOfProducts');
const totalPriceElement = document.getElementById('totalPrice');
const finishHim = document.getElementById('finish');
const open = document.getElementById('openBag');
export class BagModel {
	constructor() {
		this.bagItems = [];
	};
	pushItems(baseData, localData) {
		if (localData !== null) {
			this.bagItems = baseData
				.filter(item => localData.hasOwnProperty(item.id))
				.map(item => {
					const { id, name, price, image } = item;
					const counter = localData[item.id];
					return { id, name, price, image, counter };
				});
		} else {
			this.bagItems = [];
		}
	};
	stateChanges(event) {
		const cardElement = event.target.closest('.bag-card');
		if (cardElement) {
			const cardId = cardElement.dataset.id;
			const counterElement = cardElement.querySelector(`#counter-${cardId}`);
			let counterValue = parseInt(counterElement.innerText);
			const minusButton = cardElement.querySelector(`#minus-${cardId}`);
			const plusButton = cardElement.querySelector(`#plus-${cardId}`);
			const removeButton = cardElement.querySelector(`#remove-${cardId}`);
			if (event.target === minusButton) {
				counterValue--;
				counterElement.innerText = counterValue;
				this.calculateTotalPrice();
				this.changeLocalData(box);
				if (counterValue < 1) {
					cardElement.remove();
					this.changeLocalData(box);
				}
			} else if (event.target === plusButton) {
				counterValue++;
				counterElement.innerText = counterValue;
				this.calculateTotalPrice();
				this.changeLocalData(box);
			} else if (event.target === removeButton) {
				cardElement.remove();
				this.changeLocalData(box)
				this.calculateTotalPrice();
			}
		}
	};
	changeLocalData(container) {
		const cardElements = container.querySelectorAll('.bag-card');
		const newData = {};
		cardElements.forEach(cardElement => {
			const cardId = cardElement.dataset.id;
			const counterElement = cardElement.querySelector(`#counter-${cardId}`);
			const counterValue = parseInt(counterElement.innerText);
			newData[cardId] = counterValue;
		});
		localStorage.setItem(keyName, JSON.stringify(newData));
	};
	calculateTotalPrice() {
		let totalPrice = 0;
		const cardElements = document.querySelectorAll('.bag-card');
		cardElements.forEach(cardElement => {
			const cardId = cardElement.dataset.id;
			const counter = cardElement.querySelector(`#counter-${cardId}`);
			const price = cardElement.querySelector(`#price-${cardId}`);
			totalPrice += parseInt(counter.innerText) * parseFloat(price.innerText.replace('$', ''));
		});
		totalPriceElement.innerText = `${totalPrice.toFixed(2)}`;
	}
};
export class BagView {
	constructor(bagModel) {
		this.model = bagModel;
	};
	render(container, array) {
		container.innerHTML = '';
		if (Array.isArray(array) && array.length > 0) {
			array.forEach(card => {
				container.appendChild(this.createCard(card));
			});
		}
	}
	createCard(card) {
		const { id, name, price, image, counter } = card;
		const cardElement = document.createElement('div');
		cardElement.className = "bag-card";
		cardElement.dataset.id = id;
		cardElement.innerHTML = `
			<div class="bag-card__left">
				<div class="bag-card__img">
					<img src="${image}" alt="Fox 1">
				</div>
				<div class="bag-card__left-info">
					<h3 class="bag-card__name">${name}</h3>
					<h3 class="bag-card__price" id="price-${id}">$${price}</h3>
				</div>
			</div>
			<div class="bag-card__right">
				<div class="bag-card__control-wrapper">
					<button id="minus-${id}" type="button" class="bag-card__control">-</button>
					<button id="plus-${id}" type="button" class="bag-card__control">+</button>
					<div id="counter-${id}" class="bag-card__control-counter"><span>${counter}</span></div>
				</div>
				<div id="remove-${id}" class="bag-card__control-remove" data-id="${id}">
					Remove
				</div>
			</div>
		`;
		return cardElement;
	};
};
export class BagController {
	constructor(bagModel, bagView, data) {
		this.model = bagModel;
		this.view = bagView;
		this.data = data;
	};
	init() {
		open.addEventListener('click', async () => {
			const bag = document.getElementById('bag');
			bag.classList.add('openStyle');
			this.model.pushItems(this.data, JSON.parse(localStorage.getItem(keyName)));
			this.view.render(box, this.model.bagItems);
			this.model.calculateTotalPrice();
			if (this.model.bagItems.length === 0) {
				this.view.render(box, this.model.data);
			}
		});
		document.querySelectorAll('#closeBag').forEach(element => {
			element.addEventListener('click', () => {
				const bag = document.getElementById('bag');
				bag.classList.remove('openStyle');
			});
		});
		box.addEventListener('click', event => {
			this.model.stateChanges(event);
		});
		document.addEventListener('click', event => {
			if (event.target === finishHim) alert('FATALITY')
		})
	}
}
