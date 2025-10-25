import { type RootState } from "../store";

export const selectProject = (state: RootState) => state.project;
export const selectActiveProject = (state: RootState) =>
	state.project.list.find((project) => project.id === state.project.activeId);
