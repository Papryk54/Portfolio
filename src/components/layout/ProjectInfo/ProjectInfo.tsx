import { useSelector } from "react-redux";
import styles from "./ProjectInfo.module.scss";
import {
	selectActiveProject,
} from "../../../redux/projectReducer/projectReducer.selectors";
import ViewProjectButton from "../../utils/Buttons/ViewProjectButton/ViewProjectButton";
import TechStack from "../../utils/TechStack/TechStack";

const ProjectInfo = () => {
	const activeProject = useSelector(selectActiveProject);

	if (!activeProject) {
		return null;
	}

	return (
		<section className={styles.wrapper}>
			<div className={styles.spec}>
				<h2 className={styles.projectName}>{activeProject.name}</h2>
				<span className={styles.stackLabel}>Stack Used:</span>
				<div className={styles.techStackContainer}>
					<TechStack />
				</div>
				<ViewProjectButton
					to={
						activeProject.id === 0 ? "/about" : `/projects/${activeProject.id}`
					}
				/>
			</div>
			<div className={styles.descriptionBlock}>
				<ul>
					<li>
						<p className={styles.description}>{activeProject.description}</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ProjectInfo;
