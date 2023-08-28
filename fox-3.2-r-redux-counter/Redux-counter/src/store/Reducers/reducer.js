const initState = {
	count: 0
};

const counterReduce = (state = initState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: state.count + action.payload };
		case 'DECREMENT':
			return { ...state, count: state.count - action.payload };
		case 'MULTIPLY':
			if (state.count !== 0)
				return { ...state, count: state.count * action.payload };
		case 'DIVISION':
			if (state.count !== 0)
				return { ...state, count: state.count / action.payload };
		default:
			return state;
	}
};

export default counterReduce;
