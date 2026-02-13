import { useSelector } from "react-redux";
import styles from "./ProjectInfo.module.scss";
import {
	selectActiveProject,
	selectProject,
} from "../../../redux/projectReducer/projectReducer.selectors";
import ViewProjectButton from "../../utils/Buttons/ViewProjectButton/ViewProjectButton";
import TechStack from "../../utils/TechStack/TechStack";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const ProjectInfo = () => {
	const activeProject = useSelector(selectActiveProject);
	const projectState = useSelector(selectProject);
	const descRef = useRef(null);
	const { t } = useTranslation();

	if (!activeProject) {
		return null;
	}

	const isLastProject =
		projectState.list.length > 0 &&
		activeProject.id === projectState.list[projectState.list.length - 1].id;

	return (
		<section className={styles.wrapper}>
			<div className={styles.spec}>
				<h2
					className={
						activeProject.id === 0 ? styles.aboutName : styles.projectName
					}
				>
					{t(activeProject.name)}
				</h2>
				{activeProject.stack.length > 0 && (
					<>
						<span className={styles.stackLabel}>{t("stackUsed")}</span>
						<div className={styles.techStackContainer}>
							<TechStack />
						</div>
					</>
				)}
				<ViewProjectButton
					to={
						activeProject.id === 0
							? "/about"
							: isLastProject
							? "https://github.com/patryk-o-dev"
							: `/projects/${activeProject.id}`
					}
				/>
			</div>
			<div className={styles.descriptionBlock}>
				<p className={styles.description} ref={descRef}>
					{t(activeProject.descShort)}
				</p>
			</div>
		</section>
	);
};

export default ProjectInfo;
