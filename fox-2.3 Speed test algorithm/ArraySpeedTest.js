const repeatedNumbers = Array(100).fill(null).map(() => Math.floor(Math.random() * 1500) - 750)
const unRepeatedNumbers = [];
while (unRepeatedNumbers.length < 100) {
	const num = Math.floor(Math.random() * 1500) - 750;
	if (!unRepeatedNumbers.includes(num)) {
		unRepeatedNumbers.push(num);
	}
}
const allAlgorithms = [babblSort, sortByChoice, insertionSort, quickSort, mergeSort];
//Bubbl Sort
function babblSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let x = 0; x < n - 1; x++) {
			if (arr[x] > arr[x + 1]) {
				let buff = arr[x];
				arr[x] = arr[x + 1];
				arr[x + 1] = buff;
			}
		}
	}
	return arr;
}
//Sort by choice 
function sortByChoice(arr) {
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		let min = i;
		for (let x = i + 1; x < n; x++) {
			if (arr[min] > arr[x]) {
				min = x
			}
		}
		if (min !== i) {
			[arr[i], arr[min] + arr[min], arr[i]]
		}
	}
	return arr;
}
//Insertion sort
function insertionSort(arr) {
	let n = arr.length;
	for (let i = 1; i < n; i++) {
		let current = arr[i];
		let x = i - 1;
		while (x >= 0 && arr[x] > current) {
			arr[x + 1] = arr[x];
			x--;
		}
		arr[x + 1] = current;
	}
	return arr
}
//Quick sort
function quickSort(arr) {
	if (arr.length <= 1) return arr;
	const pivot = arr[0];
	const leftArr = [];
	const rightArr = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			leftArr.push(arr[i]);
		} else rightArr.push(arr[i]);
	};
	return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}
//Merge Sort
function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	function merge(left, right) {
		let result = [];
		let i = 0;
		let x = 0;
		while (i < left.length && x < right.length) {
			if (left[i] < right[x]) {
				result.push(left[i]);
				i++;
			} else {
				result.push(right[x]);
				x++;
			}
		}
		return result.concat(left.slice(i)).concat(right.slice(x));
	}
	return merge(mergeSort(left), mergeSort(right))
}
function arrayAlgorithms(numX, numY, algorithms) {
	algorithms.forEach(function (algorithm) {
		console.time(algorithm.name + ` sorted array with repeating numbers in`);
		algorithm(numX);
		console.timeEnd(algorithm.name + ` sorted array with repeating numbers in`);
		console.time(algorithm.name + ` sorted array with unrepeating numbers in`);
		algorithm(numY);
		console.timeEnd(algorithm.name + ` sorted array with unrepeating numbers in`);
		console.log()
	});
	let fastestAlgorithm1 = "";
	let fastestTime1 = Infinity;
	let fastestAlgorithm2 = "";
	let fastestTime2 = Infinity;
	algorithms.forEach(algorithm => {
		const startTime1 = performance.now();
		algorithm([...numX]);
		const time1 = performance.now() - startTime1;
		if (time1 < fastestTime1) {
			fastestTime1 = time1;
			fastestAlgorithm1 = algorithm.name;
		}
		const startTime2 = performance.now();
		algorithm([...numY]);
		const time2 = performance.now() - startTime2;
		if (time2 < fastestTime2) {
			fastestTime2 = time2;
			fastestAlgorithm2 = algorithm.name;
		}
	});
	console.log(`The fastest algorithm for a repeating array is ${fastestAlgorithm1}, with result: ${fastestTime1}` + `\n` + `The fastest algorithm for a unrepeating array is ${fastestAlgorithm2}, with result: ${fastestTime2}`);
}

arrayAlgorithms(repeatedNumbers, unRepeatedNumbers, allAlgorithms)
