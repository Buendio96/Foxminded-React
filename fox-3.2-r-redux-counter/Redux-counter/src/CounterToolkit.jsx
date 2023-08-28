import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, multiply, divide } from './store/Reducers/sliceCounter.js';
import './style/Style.scss';

const CounterToolkit = () => {
	const countToolkit = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	const handleIncrement = () => {
		dispatch(increment(1));
	};

	const handleDecrement = () => {
		dispatch(decrement(1));
	};

	const handleMultiply = () => {
		dispatch(multiply(2));
	};

	const handleDivide = () => {
		dispatch(divide(2));
	};

	return (
		<div>
			<div className="header">
				<h1>Counter ToolKit</h1>
				<h2>Value:<span> {countToolkit}</span></h2>
			</div>
			<div className="body">
				<div className="btns">
					<button className="button" onClick={handleIncrement}>Plus</button>
					<button className="button" onClick={handleDecrement}>Minus</button>
				</div>
				<div className="btns">
					<button className="button" onClick={handleMultiply}>Multiply</button>
					<button className="button" onClick={handleDivide}>Divide</button>
				</div>
			</div>
		</div>
	);
};

export default CounterToolkit;
