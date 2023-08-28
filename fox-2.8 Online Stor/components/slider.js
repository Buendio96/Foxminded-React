const byPrice = document.getElementById('priceFilter');
const sliderEl = document.getElementById('priceSlider');
const progressEl = document.getElementById('priceProgress');
const thumbEl = document.getElementById('priceThumb');

function customSlider(price, slider, progress, thumb) {
	const maxVal = price.getAttribute('max');
	const val = (price.value / maxVal) * 100 + '%';
	slider.innerHTML = price.value;
	progress.style.width = val;
	thumb.style.left = val;
}

byPrice.addEventListener('input', () => {
	customSlider(byPrice, sliderEl, progressEl, thumbEl);
});
