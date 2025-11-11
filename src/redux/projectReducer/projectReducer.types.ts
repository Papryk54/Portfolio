export type ProjectStack =
	| "html5"
	| "css3"
	| "javascript"
	| "react"
	| "redux"
	| "typescript"
	| "vitejs"
	| "react native"
	| "tailwind css"
	| "bootstrap 5"
	| "sass"
	| "gsap"
	| "nodejs"
	| "nestjs"
	| "mongodb"
	| "mysql"
	| "prisma"
	| "babel"
	| "expressjs"
	| "appwrite"
	| "figma"
	| "github"
	| "postman"
	| "npm"
	| "powershell"
	| "prettier"
	| "replit"
	| "electron";


export type Project = {
	id: number;
	descShort: string;
	descRegular: string[];
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
