const form = document.getElementById('mailForm');
const input = document.getElementById('mailInput');
const button = document.getElementById('mailBtn');
class Validator {
	constructor(form, input, button) {
		this.form = form;
		this.input = input;
		this.button = button;
		this.regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
		this.init();
	}
	isValid(inputText) {
		if (inputText === '') {
			this.input.setCustomValidity('Please enter an email address.');
		} else if (!this.regex.test(inputText)) {
			this.input.setCustomValidity('Please enter a valid email address.');
		} else {
			this.input.setCustomValidity('');
			this.button.innerText = "Thank's for subscribing";
			this.input.value = '';
			setTimeout(() => {
				this.button.innerText = 'Subscribe';
			}, 2000);
		}
	}
	init() {
		this.form.addEventListener('submit', (event) => {
			event.preventDefault();
			const inputText = this.input.value.trim();
			this.isValid(inputText);
		});
		this.input.addEventListener('input', () => {
			this.input.setCustomValidity('');
		});
	}
};
new Validator(form, input, button);
