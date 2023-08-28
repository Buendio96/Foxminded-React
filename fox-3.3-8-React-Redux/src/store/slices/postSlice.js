import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, postSendData } from "../../api/postApi";

export const fetchPost = createAsyncThunk(
	'post/fetchPost',
	postData
);

export const submitPost = createAsyncThunk(
	'post/submitPost',
	postSendData
);

const initialState = {
	post: [],
	error: null,
	loader: false
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		addNewPost: (state, action) => {
			state.post.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPost.pending, (state) => {
				state.loader = true;
				state.error = false;
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.post = action.payload;
				state.loader = false;
				state.error = null;
			})
			.addCase(fetchPost.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
	},
});


export const { addNewPost } = postSlice.actions;
export default postSlice.reducer;
