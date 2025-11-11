import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectReducerState } from "./projectReducer.types";

const initialState: ProjectReducerState = {
	list: [
		{
			id: 0,
			descShort:
				"Curious mind, passionate coder — get to know the person behind the projects.",
			descRegular: [
				"Curious mind, passionate coder — get to know the person behind the projects.",
				"Short bio and links to my CV and socials. More info will be added soon.",
			],
			features: [],
			futureDevelopment: [],
			images: ["AboutMe"],
			stack: [],
			name: "About Me",
		},
		{
			id: 1,
			descShort:
				"A web app for a store selling craft energy drinks for developers - lighthearted in tone, but built with solid technical craftsmanship.",
			descRegular: [
				"A web application created as the final project for my programming bootcamp. In just three weeks, I built a fully responsive store for craft energy drinks aimed at developers, adding numerous features beyond the initial scope.",
				"While working on the project, I focused heavily on user experience - from a clean and simple interface, through intuitive product sorting and variant selection, to smooth order handling. Paying attention to technical details while keeping a light, humorous tone allowed me to combine practical skills with creative problem-solving.",
				"The project taught me to work fully independently, without mentor guidance, and how to effectively break tasks into manageable stages. I learned how to plan and organize work to complete even complex projects within tight deadlines. These lessons continue to guide me in all my current projects.",
			],
			features: [
				"Login / Logout",
				"Order processing",
				"Contact form",
				"Product sorting",
				"Product variants & selection",
				"JWT authentication",
				"Admin panel",
			],
			futureDevelopment: [],
			images: [
				"FluxShop1",
				"FluxShop2",
				"FluxShop3",
				"FluxShop4",
				"FluxShop5",
				"FluxShop6",
				"FluxShop7",
				"FluxShop8",
				"FluxShop9",
			],
			stack: [
				"react",
				"redux",
				"typescript",
				"vitejs",
				"sass",
				"nodejs",
				"nestjs",
				"mysql",
				"prisma",
				"figma",
				"github",
				"postman",
				"powershell",
				"prettier",
				"replit",
			],
			name: "Flux Shop - E-commerce Desktop App",
		},
		{
			id: 2,
			descShort:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			descRegular: [
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Implemented with React, Redux and TypeScript on the frontend and Node/Express with MongoDB on the backend. Details and screenshots to follow.",
			],
			features: [],
			futureDevelopment: [],
			images: [
				"teamProject1",
				"teamProject2",
				"teamProject3",
				"teamProject4",
				"teamProject5",
				"teamProject6",
				"teamProject7",
			],
			stack: ["react", "redux", "typescript", "sass"],
			name: "Bazar - Team Project",
		},
		{
			id: 3,
			descShort:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			descRegular: [
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Implemented with React, Redux and TypeScript on the frontend and Node/Express with MongoDB on the backend. Details and screenshots to follow.",
			],
			features: [],
			futureDevelopment: [],
			images: [
				"AboutMe",
				"teamProject2",
				"teamProject3",
				"teamProject4",
				"teamProject5",
				"teamProject6",
				"teamProject7",
			],
			stack: ["react", "redux", "typescript", "sass"],
			name: "CoWatch - Coop Movie Choosing App",
		},
		{
			id: 4,
			descShort:
				"Discover my design corner: from drawing to all types of graphics, discover how an artistic project is born in the digital world.",
			descRegular: [
				"This project showcases my skills in full-stack development, combining a sleek frontend with a robust backend to deliver an exceptional user experience.",
				"Implemented with React, Redux and TypeScript on the frontend and Node/Express with MongoDB on the backend. Details and screenshots to follow.",
			],
			features: [],
			futureDevelopment: [],
			images: ["AboutMe", "ar32", "ar43", "ar54"],
			stack: ["react", "redux", "typescript", "sass"],
			name: "Coming Soon Project",
		},
	],
	activeId: 1,
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
