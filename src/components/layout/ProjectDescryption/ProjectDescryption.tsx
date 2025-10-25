import { useSelector } from "react-redux";
import styles from "./ProjectDescryption.module.scss";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import type { RootState } from "../../../redux/store";
import ViewProjectButton from "../../utils/Buttons/ViewProjectButton/ViewProjectButton";
import TechStack from "../../utils/TechStack/TechStack";

const ProjectDescryption = () => {
	const id = useSelector((state: RootState) => state.project.activeId);
	const project = useSelector(selectProject);
	const projectItem = project.list.find((item) => item.id === id);

	if (!projectItem) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.spec}>
				<h2 className={styles.projectName}>{projectItem.name}</h2>
				<span className={styles.stackLabel}>Stack Used:</span>
				<div className={styles.techStackContainer}>
					<TechStack />
				</div>
				<ViewProjectButton
					to={projectItem.id === 0 ? "/about" : `/projects/${projectItem.id}`}
				/>
			</div>
			<div className={styles.descriptionBlock}>
				<ul>
					<li>
						<p className={styles.description}>{projectItem.description}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectDescryption;
