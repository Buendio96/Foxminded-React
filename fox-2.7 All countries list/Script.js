const API = 'https://restcountries.com/v3.1/all?fields=altSpellings,flags,name,region,population,capital';
const wrapper = document.getElementById('Wrapper');
const input = document.getElementById('Input');
const toggle = document.getElementById('Toggle');
const filters = document.getElementById('Filters');
const container = document.getElementById('Container');
const errorBox = document.getElementById('Error');
class Model {
	constructor() {
		this.countries = [];
		this.filteredCountries = [];
		this.selectedRegion = 'All';
	};
	async fetchCountries(api) {
		try {
			const response = await fetch(api);
			const data = await response.json();
			this.countries = data;
			this.filteredCountries = data;
		} catch (error) {
			this.handleError('Something went wrong');
		}
	};
	filterByName(inputText) {
		const searchText = inputText.toLowerCase();
		function checkNameFields(nameObj) {
			for (const key in nameObj) {
				const fieldValue = nameObj[key];
				if (typeof fieldValue === 'object') {
					if (checkNameFields(fieldValue)) {
						return true;
					}
				} else if (fieldValue.toLowerCase().includes(searchText)) {
					return true;
				}
			}
			return false;
		};
		const filteredCountries = this.countries.filter(country => {
			const altSpellings = country.altSpellings.map(spelling => spelling.toLowerCase());
			const matchAltSpellings = altSpellings.some(spelling => spelling.includes(searchText));
			const matchNameFields = checkNameFields(country.name);
			const matchRegion = this.selectedRegion === 'All' || country.region.includes(this.selectedRegion);
			return (matchAltSpellings || matchNameFields) && matchRegion;
		});
		this.filteredCountries = filteredCountries;
		return filteredCountries;
	};
	filterByRegion(region) {
		this.selectedRegion = region;
		if (region === 'All') {
			return this.filteredCountries;
		};
		const filteredCountries = this.filteredCountries.filter(country => country.region.includes(region));
		return filteredCountries;
	};
};
class View {
	constructor() {
		this.model = new Model();
	};
	async renderAllCountryCards(api) {
		try {
			await this.model.fetchCountries(api);
			const countries = this.model.countries;
			const containerElement = document.getElementById('Container');
			containerElement.innerHTML = '';
			countries.forEach(country => {
				const card = this.createCard(country);
				containerElement.appendChild(card);
			});
			const toggleEl = toggle;
			const bool = toggleEl.checked;
			if (bool) {
				this.switchTheme(bool);
			}
		} catch (error) {
			this.handleError('Something went wrong');
		}
	};
	switchTheme(bool) {
		const wrapper = document.querySelector('.dark');
		const darkTheme = document.querySelectorAll('.dark-theme');
		const border = document.querySelectorAll('.dark-theme-border');
		const buttons = document.querySelectorAll('.header__navigation-region-list-item');
		wrapper.style.backgroundColor = bool ? '#000000' : '';
		darkTheme.forEach(element => {
			element.style.color = bool ? '#fff' : '';
			element.style.backgroundColor = bool ? '#242424' : '';
		});
		border.forEach(element => {
			element.style.border = bool ? '1px solid #fff' : '';
			element.style.boxShadow = bool ? '0 0 10px 0.1px #fff' : '';
		});
		buttons.forEach(button => {
			button.addEventListener('mouseover', function () {
				this.style.color = bool ? '#fff' : '';
				this.style.fontSize = bool ? '18px' : '';
			});
			button.addEventListener('mouseout', function () {
				this.style.color = bool ? '#fff' : '';
				this.style.fontSize = bool ? '14px' : '';
			});
		});
	};
	createCard(country) {
		const countryName = country.name.official;
		const region = country.region.trim();
		const population = country.population.toString().trim();
		const capital = country.capital.join(', ').trim();
		const flag = {
			pngFile: country.flags.png,
			altText: country.flags.alt
		};
		const card = document.createElement('div');
		card.className = 'main__item item';
		card.innerHTML = `
			<div class="item__img">
				<img src="${flag.pngFile}" alt="${flag.altText}">
			</div>
			<div class="item__info dark-theme-border dark-theme">
				<p class="item__info-country-name dark-theme">${countryName}</p>
				<p class="item__info-country dark-theme"><span class="dark-theme">Region:</span> ${region}</p>
				<p class="item__info-country dark-theme"><span class="dark-theme">Population:</span> ${population}</p>
				<p class="item__info-country dark-theme"><span class="dark-theme">Capital:</span> ${capital}</p>
			</div>
		`;
		return card;
	};
	renderCountryCards(countries) {
		const containerElement = document.getElementById('Container');
		containerElement.innerHTML = '';
		countries.forEach(country => {
			const card = this.createCard(country);
			containerElement.appendChild(card);
		});
	};
	renderByName(inputText) {
		const filteredCountries = this.model.filterByName(inputText);
		this.renderCountryCards(filteredCountries);
	};
	renderByRegion(region) {
		const filteredCountries = this.model.filterByRegion(region);
		this.renderCountryCards(filteredCountries);
	};
	handleError(error) {
		const errorEl = document.getElementById('Error');
		if (!error) {
			errorEl.style.display = 'none';
		} else {
			errorEl.style.display = 'block';
			errorEl.innerHTML = `<p>${error}</p>`;
		}
	};
	isValidInput(inputText) {
		if (/^[\p{L}]+$/u.test(inputText)) {
			this.handleError(null);
		} else {
			this.handleError('Please use only letters');
		}
	};
};
class Controller {
	constructor() {
		this.model = new Model();
		this.view = new View();
	};
	initialization() {
		window.addEventListener('DOMContentLoaded', async () => {
			await this.view.renderAllCountryCards(API);
			this.applyTheme();
		});
		input.addEventListener('input', () => {
			const inputText = input.value.trim();
			if (inputText === '') {
				this.view.renderAllCountryCards(API);
				this.view.isValidInput(null);
			} else {
				this.view.renderByName(inputText);
				this.view.isValidInput(inputText);
			}
			this.applyTheme();
		});
		filters.addEventListener('click', event => {
			const region = event.target.id;
			this.view.renderByRegion(region);
			this.applyTheme();
		});
		toggle.addEventListener('change', () => {
			this.applyTheme();
		});
	};
	applyTheme() {
		const bool = toggle.checked;
		this.view.switchTheme(bool);
	};
}
const controller = new Controller()
controller.initialization()