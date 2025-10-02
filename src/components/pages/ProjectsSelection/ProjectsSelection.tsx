import styles from "./ProjectsSelection.module.scss";

const ProjectsSelection = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Projects Selection</h2>
			<p className={styles.description}>
				Here you can select and view various projects that showcase my skills
				and experience as a full stack web developer.
			</p>
		</div>
	);
};

export default ProjectsSelection;
