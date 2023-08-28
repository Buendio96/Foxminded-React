import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.js';
import storeTool from './store/storeTool.js';
import Counter from './Counter';
import CounterToolkit from './CounterToolkit';
import './style/Style.scss'

function App() {
	return (
		<div className="wrapper">
			<Provider store={store}>
				<Counter />
			</Provider>
			<Provider store={storeTool}>
				<CounterToolkit />
			</Provider>
		</div>
	);
}

export default App;
