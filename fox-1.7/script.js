const swapper = (offset) => {
	const activeSlide = document.querySelector(".sliders__slide.s1")
	const slides = [...document.querySelectorAll(".sliders__slide")]
	const currentIndex = slides.indexOf(activeSlide)
	newIndex = (currentIndex + offset + slides.length) % slides.length
	if (newIndex < 0) newIndex = slides.length - 1
	if (newIndex >= slides.length) newIndex = 0
	slides[newIndex].dataset.active = true
	delete activeSlide.dataset.active
}

const onPrev = () => swapper(-1)
const onNext = () => swapper(1)

const prevBtn = document.querySelector(".sliders-btn.left")
prevBtn.addEventListener("click", onPrev)

const nextBtn = document.querySelector(".sliders-btn.right")
nextBtn.addEventListener("click", onNext)
