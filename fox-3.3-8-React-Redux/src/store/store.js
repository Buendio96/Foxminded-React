import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postSlice from "./slices/postSlice";
import todoSlice from "./slices/todoSlice";
import userSlice from "./slices/userSlice";
import popapSlice from "./slices/popapSlice";

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: 'root',
	storage
}

const rootReducer = combineReducers({
	todo: todoSlice,
	post: postSlice,
	user: userSlice,
	popup: popapSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const Store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(Store)
export default Store;