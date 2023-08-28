const byPrice = document.getElementById('priceFilter');
const byName = document.getElementById('searchFilter');
const byType = document.getElementById('typeFilter');
const container = document.getElementById('container');

export class Model {
	constructor(data) {
		this.items = data;
		this.activeFilters = {
			name: '',
			type: 'All',
			price: null
		};
	};
	updateURLParams() {
		const params = new URLSearchParams();
		if (this.activeFilters.name !== '') {
			params.set('name', this.activeFilters.name);
		}
		if (this.activeFilters.type !== 'All') {
			params.set('type', this.activeFilters.type);
		}
		if (this.activeFilters.price !== null) {
			params.set('price', this.activeFilters.price);
		}
		const newURL = `${window.location.pathname}?${params.toString()}`;
		window.history.replaceState({}, '', newURL);
	};
	applyFilters() {
		let filteredItems = this.items;
		if (this.activeFilters.name !== '') {
			filteredItems = filteredItems.filter(item => {
				const name = item.name.toLowerCase();
				return name.includes(this.activeFilters.name.toLowerCase());
			});
		}
		if (this.activeFilters.type !== 'All') {
			filteredItems = filteredItems.filter(item => item.type === this.activeFilters.type);
		}
		if (this.activeFilters.price !== null) {
			filteredItems = filteredItems.filter(item => {
				const min = this.activeFilters.price - 5;
				const max = this.activeFilters.price + 5;
				return item.price >= min && item.price <= max;
			});
		}
		return filteredItems;
	};
	delayFunc(func, delay) {
		let timerId;
		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timerId);
			timerId = setTimeout(() => {
				func.apply(context, args);
			}, delay);
		};
	};
	createNewDataInLocal(id) {
		let existingItem = JSON.parse(localStorage.getItem('all items'));
		if (!existingItem) {
			existingItem = {};
		}
		if (existingItem[id]) {
			existingItem[id]++;
		} else {
			existingItem[id] = 1;
		}
		localStorage.setItem('all items', JSON.stringify(existingItem));
	}
};
export class View {
	constructor(model) {
		this.model = model;
	}
	render(container, array) {
		container.innerHTML = '';
		array.forEach(card => {
			container.appendChild(this.createCard(card));
		});
	};
	createCard(card) {
		const { id, name, price, type, image } = card;
		const cardElement = document.createElement('div');
		cardElement.className = 'shop__item card';
		cardElement.innerHTML = `
				<div class="card__img">
					<img src="${image}" alt="Fox">
					<button data-id="${id}"  class="card__add">
						<span></span>
						<span></span>
						<h4 class="card__add-text">Add</h4>
					</button>
				</div>
				<div class="card__info">
						<h3 id="card-name" class="card__info-name">${name}</h3>
						<h3 id="card-price" class="card__info-price">$${price}</h3>
						<div class="card__rating">
							<div class="card__rating-items">
								<input id="${id}-5" class="card__rating-item" type="radio" value="5" name="${id}">
								<label for="${id}-5" class="card__rating-item-name"></label>
								<input id="${id}-4" class="card__rating-item" type="radio" value="4" name="${id}">
								<label for="${id}-4" class="card__rating-item-name"></label>
								<input id="${id}-3" class="card__rating-item" type="radio" value="3" name="${id}">
								<label for="${id}-3" class="card__rating-item-name"></label>
								<input id="${id}-2" class="card__rating-item" type="radio" value="2" name="${id}">
								<label for="${id}-2" class="card__rating-item-name"></label>
								<input id="${id}-1" class="card__rating-item" type="radio" value="1" name="${id}">
								<label for="${id}-1" class="card__rating-item-name"></label>
							</div>
						</div>
						<h3 id="card-price" class="card__type">${type}</h3>
				</div>
			`;
		return cardElement;
	};
};
export class Controller {
	constructor(view, model) {
		this.view = view;
		this.model = model;
	}
	init() {
		window.addEventListener('load', () => {
			this.view.render(container, this.model.items);
		});
		window.addEventListener('load', () => {
			const params = new URLSearchParams(window.location.search);
			const priceParam = params.get('price');
			this.model.activeFilters.name = params.get('name') || '';
			this.model.activeFilters.type = params.get('type') || 'All';
			this.model.activeFilters.price = priceParam !== null && priceParam !== '' ? parseInt(priceParam) : null;
			byName.value = this.model.activeFilters.name;
			byType.querySelector(`[data-type="${this.model.activeFilters.type}"]`).click();
			if (this.model.activeFilters.price !== null) {
				byPrice.value = this.model.activeFilters.price;
			}
			this.view.render(container, this.model.applyFilters());
			this.model.updateURLParams();
		});
		byName.addEventListener('input', this.model.delayFunc(() => {
			const inputText = byName.value.trim();
			this.model.activeFilters.name = inputText;
			this.view.render(container, this.model.applyFilters());
			this.model.updateURLParams();
		}, 1000));
		byType.addEventListener('click', event => {
			if (event.target.tagName === 'BUTTON') {
				const type = event.target.getAttribute('data-type');
				this.model.activeFilters.type = type;
				this.view.render(container, this.model.applyFilters());
				this.model.updateURLParams();
			}
		});
		byPrice.addEventListener('input', () => {
			this.model.activeFilters.price = parseInt(byPrice.value);
			this.view.render(container, this.model.applyFilters());
			this.model.updateURLParams();
		});
		container.addEventListener('click', event => {
			const addButton = event.target.closest('.card__add');
			if (addButton) {
				const id = addButton.getAttribute('data-id');
				this.model.createNewDataInLocal(id);
			}
		});
	}

}

