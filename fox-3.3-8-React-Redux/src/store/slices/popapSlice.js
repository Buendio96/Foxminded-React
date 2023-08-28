import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { applyUserData, selectedUserData } from "../../api/userApi";


export const fetchSelectedUser = createAsyncThunk(
	'user/fetchSelectedUser',
	async ({ id }) => {
		const data = await selectedUserData(id);
		return { id, data };
	}
);
export const getApplyUserData = createAsyncThunk(
	'user/applyUserData',
	async ({ id, datatype }) => {
		const data = await applyUserData(id, datatype);
		return { data, datatype };
	}
);

const initialState = {
	usersData: {},
	tabs: {},
	error: null,
	loader: false,
};
const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSelectedUser.pending, (state) => {
				state.loader = true;
				state.error = false;
			})
			.addCase(fetchSelectedUser.fulfilled, (state, action) => {
				const { id, data } = action.payload;
				state.usersData[id] = data;
				state.loader = false;
				state.error = null;
			})
			.addCase(fetchSelectedUser.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
			.addCase(getApplyUserData.pending, (state) => {
				state.loader = true;
				state.error = false;
			})
			.addCase(getApplyUserData.fulfilled, (state, action) => {
				const { data, datatype } = action.payload;
				state.tabs[datatype] = { data }
				state.loader = false;
				state.error = null;
			})
			.addCase(getApplyUserData.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			});
	},
});
export default popupSlice.reducer;
