const elements = [
	'.header',
	'.header__body',
	'.header__body-logo',
	'.header__body-nav-box',
	'.header__body-nav-burger',
	'.header__body-nav-list',
	'.header__body-icons',
	'.header__body-nav-item'
];

const header = document.getElementById('header');
document.getElementById('active').addEventListener('click', () => {
	elements.forEach(element => document.querySelector(element).classList.toggle('active'));
});
document.addEventListener('click', (event) => {
	const targetElement = event.target;
	if (!targetElement.closest(elements[3]) || targetElement.closest(elements[7])) {
		elements.forEach(element => document.querySelector(element).classList.remove('active'));
	};
});

