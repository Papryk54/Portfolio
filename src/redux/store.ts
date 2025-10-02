import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageChanger/languageChanger.slice";
import locationReducer from "./locationReducer/locationReducer.slice";


export const store = configureStore({
	reducer: {
		language: languageReducer,
		location: locationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
