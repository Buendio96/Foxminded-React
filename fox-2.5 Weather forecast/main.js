const apiKey = 'ca604fa198392409eeb85c1127dc08fa';
const baseUrl = 'https://api.openweathermap.org/data/2.5';
const input = document.getElementById('cityInput');
const container = document.getElementById('weatherContainer');

const removeSpaces = (arg) => {
	return arg.replace(/-/g, ' ');
};

const determineLanguage = (arg) => {
	const rusLetters = /[а-яё]/i;
	const lang = rusLetters.test(arg) ? 'ru' : 'en';
	return lang;
};

class Cards {
	constructor(params) {
		this.dayIs = params.dayIs;
		this.cityIs = params.cityIs;
		this.countryIs = params.countryIs;
		this.temperatureDay = params.temperatureDay;
		this.tempFeelsLike = params.tempFeelsLike;
		this.description = params.description;
		this.urlIcon = params.urlIcon;
	}
	render(index) {
		const itemDay = document.createElement('li');
		itemDay.classList.add('card__box');
		let html = '';
		if (index === 0) {
			html = `
				<div>
				    <h2 class="card__first-box-temprature-value">${this.temperatureDay}°С </h2>
				    <h3 class="card__first-box-temprature-feels-like">Feels like ${this.tempFeelsLike}°С </h3>
				</div>
				<div>
				    <h2 class="card__first-box-description-text">${this.description}</h2>
				    <h3 class="card__first-box-target-city">${this.cityIs}, ${this.countryIs}</h3>
				</div>
				<div class="card__first-box-img">
				    <img src="${this.urlIcon}" alt="">
				</div>
	  	  `;
		} else {
			html = `
			<div>
			    <h2 class="card__box-day-is">${this.dayIs}</h2>
			</div>
			<div class="card__box-img">
			    <img src="${this.urlIcon}" alt="">
			</div>
			<div>
		  	  <h2 class="card__box-description-text">${this.description}</h2>
			</div>
			<div>
		  	  <h3 class="card__box-temprature-value">${this.temperatureDay}°С </h3>
		  	  <h3 class="card__box-temprature-feels-like">${this.tempFeelsLike}°С </h3>
			</div>
		    `;
		}
		itemDay.innerHTML = html;
		container.appendChild(itemDay);
	}
	static error() {
		const errorBox = document.createElement('li');
		errorBox.classList.add('card__box-error');
		const errorValue = `
		<div class="card__error">
		<div class="card__error-img">
		<img src="/Source/error.jpg" alt="">
		</div>
		<p class="card__error-message">
			Something went wrong. Please make sure that the entered city exists and is spelled correctly.
		</p>
		</div>
		`;
		errorBox.innerHTML = errorValue;
		container.appendChild(errorBox);
	}
}

const getWeatherData = (arg) => {
	return fetch(`${baseUrl}/forecast?units=metric&q=${removeSpaces(arg)}&lang=${determineLanguage(arg)}&cnt=40&appid=${apiKey}`);
}
const onCityInput = async (arg) => {
	try {
		const response = await getWeatherData(arg);
		const data = await handleResponse(response);
		const weatherBox = createWeatherBox(data);
		return weatherBox;
	} catch (error) {
		return createError();
	}
};
const handleResponse = (response) => {
	if (!response.ok) {
		throw new Error('Network response was not ok');
	}
	return response.json();
};

const createError = () => {
	Cards.error();
};

const createWeatherBox = (data) => {
	const city = data.city.name;
	const country = data.city.country;
	for (let i = 0; i < data.list.length; i += 8) {
		const dayData = data.list[i];
		const date = new Date(dayData.dt_txt);
		const dayOfWeek = new Intl.DateTimeFormat(determineLanguage(city), {
			weekday: 'short'
		}).format(date);
		const tempDay = Math.round(dayData.main.temp);
		const feelsLike = Math.round(dayData.main.feels_like);
		const description = dayData.weather[0].description;
		const idIcon = dayData.weather[0].icon;
		const iconUrl = `https://openweathermap.org/img/w/${idIcon}.png`;
		const day = new Cards({
			dayIs: dayOfWeek,
			cityIs: city,
			countryIs: country,
			temperatureDay: tempDay,
			tempFeelsLike: feelsLike,
			description: description,
			urlIcon: iconUrl
		});
		day.render(i);
	}
};

function debounce(func, delay) {
	let timerId;
	return function () {
		const context = this;
		const args = arguments;
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			func.apply(context, args);
		}, delay);
	}
}
const debounceHandler = debounce(onCityInput, 1500);

input.addEventListener("input", () => {
	container.innerHTML = '';
	const cityName = input.value.trim();
	debounceHandler(cityName);
});
