import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/sliceCounter";

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

export default store;
