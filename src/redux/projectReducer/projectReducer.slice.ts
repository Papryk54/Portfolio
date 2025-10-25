import { createSlice } from "@reduxjs/toolkit";
import type { ProjectReducerState } from "./projectReducer.types";

const initialState: ProjectReducerState = {
	list: [
		{
			id: 0,
			description:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			image: "/src/assets/images/placeholderImg.png",
			stack: [],
			name: "Project 1",
		},
		{
			id: 1,
			description:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			image: "/src/assets/images/placeholderImg.png",
			stack: [
				"react",
				"redux",
				"typescript",
				"sass",
				"gsap",
				"appwrite",
				"electron",
				"mysql",
				"vitejs",
			],
			name: "Project 2",
		},
		{
			id: 2,
			description:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			image: "/src/assets/images/placeholderImg.png",
			stack: ["react", "redux", "typescript", "sass"],
			name: "Project 3",
		},
		{
			id: 3,
			description:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			image: "/src/assets/images/placeholderImg.png",
			stack: ["react", "redux", "typescript", "sass"],
			name: "Project 4",
		},
		{
			id: 4,
			description:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			image: "/src/assets/images/placeholderImg.png",
			stack: ["react", "redux", "typescript", "sass"],
			name: "Project 5",
		},
	],
	activeId: null,
};

const projectReducerSlice = createSlice({
	name: "projectReducer",
	initialState,
	reducers: {
		setActiveProject(state, action) {
			state.activeId = action.payload;
		},
	},
});

export const { setActiveProject } = projectReducerSlice.actions;
export default projectReducerSlice.reducer;
