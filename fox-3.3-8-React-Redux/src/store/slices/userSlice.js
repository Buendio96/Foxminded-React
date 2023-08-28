import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userData } from "../../api/userApi";

export const fetchUser = createAsyncThunk(
	'user/fetchUser',
	userData);

const initialState = {
	users: [],
	error: null,
	loader: false,
};
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUser.pending, (state) => {
				state.loader = true;
				state.error = false;
			})
			.addCase(fetchUser.fulfilled, (state, action) => {
				state.users = action.payload;
				state.loader = false;
				state.error = null;
			})
			.addCase(fetchUser.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
	},
});
export default userSlice.reducer;
