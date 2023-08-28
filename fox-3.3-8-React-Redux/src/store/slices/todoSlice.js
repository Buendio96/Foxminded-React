import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todoData } from "../../api/todoApi";

export const fetchTodo = createAsyncThunk(
	'todo/fetchTodo',
	todoData);

const initialState = {
	toDo: [],
	error: null,
	loader: false,
};

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		toggleTodo: (state, action) => {
			const todoId = action.payload;
			const todoUpdate = state.toDo.find(todo => todo.id === todoId);
			if (todoUpdate) todoUpdate.completed = !todoUpdate.completed;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodo.pending, (state) => {
				state.loader = true;
				state.error = null;
			})
			.addCase(fetchTodo.fulfilled, (state, action) => {
				state.toDo = action.payload;
				state.loader = false;
				state.error = null;
			})
			.addCase(fetchTodo.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			});
	},
});

export const { toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
