import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageChanger/languageChanger.slice";
import projectReducer from "./projectReducer/projectReducer.slice";

export const store = configureStore({
	reducer: {
		language: languageReducer,
		project: projectReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
