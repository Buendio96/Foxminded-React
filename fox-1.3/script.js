const slider = document.getElementById("income");
const value = document.getElementById("value");
value.innerHTML = slider.value;
slider.oninput = function () {
	value.innerHTML = this.value;
}