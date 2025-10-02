import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LanguageState } from "./languageChanger.types";

const initialState: LanguageState = {
	currentLanguage: "EN",
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<string>) {
			state.currentLanguage = action.payload;
		},
	},
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
