import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LanguageState } from "./languageChanger.types";

const initialState: LanguageState = {
	currentLanguage: "en",
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage(state, action: PayloadAction<"en" | "pl">) {
			state.currentLanguage = action.payload;
		},
	},
});
export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
