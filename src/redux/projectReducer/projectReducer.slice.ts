import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectReducerState } from "./projectReducer.types";

const initialState: ProjectReducerState = {
	list: [
		{
			id: 0,
			description: [
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Built with React, Redux, and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, this application demonstrates my ability to create scalable and efficient web solutions.",
			],
			features: [],
			futureDevelopment: [],
			images: ["placeholderImg1", "ar32", "ar43", "ar54"],
			stack: [],
			name: "Project 1",
		},
		{
			id: 1,
			description: [
				"Description: Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Built with React, Redux, and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, this application demonstrates my ability to create scalable and efficient web solutions.",
			],
			features: [
				"Feature 1",
				"Feature 2",
				"Feature 3",
				"Feature 4",
				"Feature 5",
				"Feature 6",
			],
			futureDevelopment: [
				"Future Development 1",
				"Future Development 2",
				"Future Development 3",
				"Future Development 4",
				"Future Development 5",
				"Future Development 6",
			],
			images: [
				"ar32",
				"ar43",
				"ar54",
				"placeholderImg1",
				"placeholderImg2",
				"placeholderImg3",
				"placeholderImg4",
				"placeholderImg5",
				"placeholderImg6",
			],
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
			description: [
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Built with React, Redux, and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, this application demonstrates my ability to create scalable and efficient web solutions.",
			],
			features: [],
			futureDevelopment: [],
			images: ["placeholderImg2", "ar32", "ar43", "ar54"],
			stack: ["react", "redux", "typescript", "sass"],
			name: "Project 3",
		},
		{
			id: 3,
			description: [
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Built with React, Redux, and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, this application demonstrates my ability to create scalable and efficient web solutions.",
			],
			features: [],
			futureDevelopment: [],
			images: ["placeholderImg3", "ar32", "ar43", "ar54"],
			stack: ["react", "redux", "typescript", "sass"],
			name: "Project 4",
		},
		{
			id: 4,
			description: [
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Built with React, Redux, and TypeScript on the frontend, and Node.js with Express and MongoDB on the backend, this application demonstrates my ability to create scalable and efficient web solutions.",
			],
			features: [],
			futureDevelopment: [],
			images: ["placeholderImg5", "ar32", "ar43", "ar54"],
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
		setImages(state, action: PayloadAction<string[]>) {
			state.list[state.activeId!].images = action.payload;
		},
	},
});

export const { setActiveProject, setImages } = projectReducerSlice.actions;
export default projectReducerSlice.reducer;
