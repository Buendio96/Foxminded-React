const targetElement = document.getElementById("targetElement");
const listWithGradients = [
	'radial-gradient(circle, rgba(188,109,79,1) 0%, rgba(157,51,31,1) 25%, rgba(80,8,5,1) 75%, rgba(30,0,0,1) 100%)',
	'radial-gradient(circle, rgba(68,76,92,1) 0%, rgba(206,90,87,0.9612219887955182) 25%, rgba(120,165,163,1) 75%, rgba(225,177,106,1) 100%)',
	'radial-gradient(circle, rgba(51,82,82,1) 0%, rgba(212,221,225,1) 35%, rgba(170,75,65,1) 78%, rgba(45,48,51,1) 100%)',
	'radial-gradient(circle, rgba(142,121,112,1) 0%, rgba(15,31,56,1) 38%, rgba(27,75,90,1) 72%, rgba(245,84,73,1) 100%)',
	'radial-gradient(circle, rgba(4,32,44,1) 0%, rgba(48,64,64,1) 38%, rgba(91,112,101,1) 72%, rgba(201,209,200,1) 100%',
	'radial-gradient(circle, rgba(226,232,228,1) 0%, rgba(0,108,132,1) 38%, rgba(110,181,192,1) 72%, rgba(255,204,187,1) 100%)',
	'radial-gradient(circle, rgba(89,130,52,1) 3%, rgba(174,189,56,1) 18%, rgba(104,130,158,1) 62%, rgba(80,81,96,1) 100%)'
];

document.getElementById("randomBg").addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * listWithGradients.length);
	targetElement.style.background = listWithGradients[randomIndex];
});