import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state, action) => {
			state.count += action.payload;
		},
		decrement: (state, action) => {
			state.count -= action.payload;
		},
		multiply: (state, action) => {
			state.count *= action.payload;
		},
		divide: (state, action) => {
			state.count /= action.payload;
		},
	},
});

export const { increment, decrement, multiply, divide } = counterSlice.actions;
export default counterSlice.reducer;
