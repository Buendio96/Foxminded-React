import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
	increment,
	decrement,
	multiply,
	division
} from "./store/Actions/action.js";
import './style/Style.scss'
const Counter = () => {
	const [inputValue, setValue] = useState("")
	const count = useSelector((state) => state.count);
	const dispatch = useDispatch();
	const handler = (input, operand) => {
		if (input !== "" && !isNaN(input)) {
			dispatch(operand(input));
		}
	}
	const hundleInputValue = (event) => {
		const inputValue = Number(event.target.value);
		if (!isNaN(inputValue)) {
			setValue(inputValue);
		} else {
			setValue(0);
		}
	};
	return (
		<div >
			<div className="header">
				<h1><span style={{ textDecoration: 'line-through' }}>Counter</span> Calculator</h1>
				<h2>Value:<span> {count}</span></h2>
			</div>
			<div className="body ">
				<div className="btns">
					<button className="button" onClick={() => handler(inputValue, increment)}>Plus</button>
					<button className="button" onClick={() => handler(inputValue, decrement)}>Minus</button>
				</div>
				<input placeholder="please enter a number" className="input" type="numbers" value={inputValue} onChange={hundleInputValue} />
				<div className="btns">
					<button className="button" onClick={() => handler(inputValue, multiply)}>Multiply</button>
					<button className="button" onClick={() => handler(inputValue, division)}>Divide</button>
				</div>
			</div>
		</div >
	);
}

export default Counter;
