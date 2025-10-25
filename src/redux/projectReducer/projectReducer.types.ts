export type ProjectStack =
	| "react"
	| "redux"
	| "typescript"
	| "sass"
	| "prettier"
	| "appwrite"
	| "electron"
	| "mysql"
	| "gsap"
	| "vitejs";

export type Project = {
	id: number;
	description: string[];
	features: string[];
	futureDevelopment: string[];
	images: string[];
	stack: ProjectStack[];
	name: string;
};

export type ProjectReducerState = {
	list: Project[];
	activeId: number | null;
};
