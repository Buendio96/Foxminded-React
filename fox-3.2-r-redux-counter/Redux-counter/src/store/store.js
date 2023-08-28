import { createStore } from "redux";
import counterReduce from "./Reducers/reducer.js";

const store = createStore(
	counterReduce,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;