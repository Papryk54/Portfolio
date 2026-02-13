export type ProjectStack =
	| "html5"
	| "css3"
	| "js"
	| "react"
	| "redux"
	| "typescript"
	| "vitejs"
	| "react native"
	| "tailwindcss"
	| "bootstrap5"
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
	| "electron"
	| "jira";

export type Project = {
	id: number;
	descShort: string;
	descRegular: string[];
	features: string[];
	futureDevelopment: string[];
	images: string[];
	stack: ProjectStack[];
	githubLink?: string;
	websiteLink?: string;
	name: string;
};

export type ProjectReducerState = {
	list: Project[];
	activeId: number | null;
};
