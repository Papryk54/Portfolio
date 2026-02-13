import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProjectReducerState } from "./projectReducer.types";

const initialState: ProjectReducerState = {
	list: [
		{
			id: 0,
			descShort: "projectAboutDescShort",
			descRegular: ["projectAboutDescRegular1", "projectAboutDescRegular2"],
			features: [],
			futureDevelopment: [],
			images: ["AboutMe"],
			stack: [],
			name: "projectAbout",
		},
		{
			id: 1,
			descShort: "projectFluxShopDescShort",
			descRegular: [
				"projectFluxShopDescRegular1",
				"projectFluxShopDescRegular2",
				"projectFluxShopDescRegular3",
			],
			features: [
				"loginLogout",
				"orderProcessing",
				"contactForm",
				"productSorting",
				"productVariantsSelection",
				"jwtAuthentication",
				"adminPanel",
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
			githubLink: "https://github.com/patryk-o-dev/FluxShop",
			name: "projectFluxShop",
		},
		{
			id: 2,
			descShort: "projectBazarDescShort",
			descRegular: ["projectBazarDescRegular1", "projectBazarDescRegular2"],
			features: [
				"Adding items to cart",
				"Sorting products",
				"Filtering products",
				"Product variants selection",
				"database integration",
				"special offers",
				"login/logout",
			],
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
			stack: [
				"react",
				"redux",
				"js",
				"sass",
				"nodejs",
				"jira",
				"figma",
				"github",
				"bootstrap5",
			],
			githubLink: "https://github.com/patryk-o-dev/kodilla-wdp-2501",
			name: "projectBazar",
		},
		{
			id: 3,
			descShort: "projectEsthetiqueDescShort",
			descRegular: [
				"projectEsthetiqueDescRegular1",
				"projectEsthetiqueDescRegular2",
			],
			features: [
				"featureOnlineBooking",
				"featureEmailNotifications",
				"featureGallery",
				"featureContactForm",
				"featureGoogleMaps",
			],
			futureDevelopment: [],
			images: ["esthetique1", "esthetique2", "esthetique3", "esthetique4"],
			stack: [
				"react",
				"typescript",
				"sass",
				"figma",
				"github",
				"powershell",
				"prettier",
				"replit",
			],
			githubLink: "https://github.com/patryk-o-dev/Estetique",
			websiteLink: "https://esthetiquesalon.pl",
			name: "projectEsthetique",
		},
		{
			id: 4,
			descShort: "projectNextDescShort",
			descRegular: ["projectNextDescRegular1", "projectNextDescRegular2"],
			features: [],
			futureDevelopment: [],
			images: ["AboutMe"],
			stack: [],
			name: "projectNext",
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
