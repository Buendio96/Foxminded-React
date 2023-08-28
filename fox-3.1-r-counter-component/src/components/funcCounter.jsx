import React, { useState } from 'react';

const FuncCounter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1)
	};
	const decrement = () => {
		setCount(count - 1)
	};
	return (
		<div>
			<h1>This is a Functional counter</h1>
			<h2>Value: {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
};

export default FuncCounter;