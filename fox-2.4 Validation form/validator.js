const slider = document.getElementById('income');
const value = document.getElementById('value');
value.innerHTML = slider.value;
slider.oninput = function () {
	value.innerHTML = this.value;
}

//Validator
class Validator {
	static isRequired(form) {
		return form !== '';
	};
	static validNameAndLastName(firstName, LastName) {
		return /^[a-zA-Zа-яА-Я]+$/.test(firstName + LastName);
	}
	static validEmail(email) {
		return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
	};
	static validPassword(password) {
		return /^(?=.*[a-zA-Z-а-яА-Я]{5,})(?=.*\d{3,}).{1,}$/.test(password);
	}
}
const form = document.getElementById('new-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const popup = document.getElementById('popup');
	const buttonYes = document.getElementById('button-yes');
	const buttonNo = document.getElementById('button-no');
	const successAlert = document.getElementById('form-allert')
	function Valid() {
		const firstName = document.getElementById('FirstName').value.trim();
		const lastName = document.getElementById('LastName').value.trim();
		const email = document.getElementById('Email').value.trim();
		const password = document.getElementById('Password').value.trim();
		const rePassword = document.getElementById('RePassword').value.trim();
		const errorName = document.getElementById('error-name');
		const errorEmail = document.getElementById('error-email');
		const errorPassword = document.getElementById('error-password');
		const allInputs = document.querySelectorAll('input')
		allInputs.forEach(input => {
			input.addEventListener('change', () => {
				errorName.style.display = 'none';
				errorEmail.style.display = 'none';
				errorPassword.style.display = 'none';
			});
		});
		if (!Validator.isRequired(firstName)) {
			errorName.style.display = 'block';
			errorName.textContent = 'Your first name is ... ';
			return false;
		}
		if (!Validator.isRequired(lastName)) {
			errorName.style.display = 'block';
			errorName.textContent = 'Your last name is ... ';
			return false;
		}
		if (!Validator.validNameAndLastName(firstName, lastName)) {
			errorName.style.display = 'block';
			errorName.textContent = 'Please use only Cyrillic or Latin characters.';
			return false;
		}
		if (!Validator.isRequired(email)) {
			errorEmail.style.display = 'block';
			errorEmail.textContent = 'Your email is the only way to contact you';
			return false;
		}
		if (!Validator.validEmail(email)) {
			errorEmail.style.display = 'block';
			errorEmail.textContent = 'Please create an email according to the example (example@xxx.com)';
			return false;
		}
		if (!Validator.isRequired(password)) {
			errorPassword.style.display = 'block';
			errorPassword.textContent = 'Creating a password is the basic protection of your account';
			return false;
		}
		if (!Validator.isRequired(rePassword)) {
			errorPassword.style.display = 'block';
			errorPassword.textContent = 'Please enter your password again in the Confirm Password field';
			return false;
		} if (password !== rePassword) {
			errorPassword.style.display = 'block';
			errorPassword.textContent = 'The data in the Confirm Password field must match the data in the Password field';
			return false;
		}
		if (!Validator.validPassword(password)) {
			errorPassword.style.display = 'block';
			errorPassword.textContent = 'The password must contain at least 5 letters and 3 numbers';
			return false;
		}
		return true;
	}
	if (Valid()) {
		const overlay = document.createElement('div');
		popup.style.display = 'block';
		overlay.style.position = 'fixed';
		overlay.style.top = 0;
		overlay.style.left = 0;
		overlay.style.width = '100%';
		overlay.style.height = '100%';
		overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		overlay.style.zIndex = '999';
		document.body.insertBefore(overlay, document.body.firstChild);
		buttonYes.addEventListener('click', () => {
			popup.style.display = 'none';
			overlay.remove();
		})
		buttonNo.addEventListener('click', () => {
			popup.style.display = 'none';
			successAlert.style.display = 'block';
			setTimeout(() => {
				document.addEventListener('click', resetForm);
			}, 500);
		});
		function resetForm() {
			successAlert.style.display = 'none';
			document.removeEventListener('click', resetForm);
			overlay.remove();
			form.reset();
		}
	}

});