export const increment = (num) => {
	return {
		type: 'INCREMENT',
		payload: num
	};
};

export const decrement = (num) => {
	return {
		type: 'DECREMENT',
		payload: num
	};
};

export const multiply = (num) => {
	return {
		type: 'MULTIPLY',
		payload: num
	};
};

export const division = (num) => {
	return {
		type: 'DIVISION',
		payload: num
	};
};
