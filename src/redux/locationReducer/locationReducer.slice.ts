import { createSlice } from "@reduxjs/toolkit";
import type { LocationReducerState } from "./locationReducer.types.ts";

const initialState: LocationReducerState = {
	value: "home",
};

const locationReducerSlice = createSlice({
	name: "locationReducer",
	initialState,
	reducers: {
		setLocation(state, action) {
			state.value = action.payload;
		},
	},
});

export const { setLocation } = locationReducerSlice.actions;
export default locationReducerSlice.reducer;
