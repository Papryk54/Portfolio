import { type RootState } from "../store";

export const selectCurrentLanguage = (state: RootState) =>
	state.language.currentLanguage;
