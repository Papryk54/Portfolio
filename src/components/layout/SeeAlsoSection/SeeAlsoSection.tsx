import { useSelector } from "react-redux";
import styles from "./SeeAlsoSection.module.scss";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { useEffect, useState } from "react";
import type { Project } from "../../../redux/projectReducer/projectReducer.types";
import { getImageByName } from "../../../utils/images";
import { Link } from "react-router-dom";
import { t } from "i18next";

type Props = {
	id: number;
	variant?: "cv";
};

const SeeAlsoSection = ({ id, variant }: Props) => {
	const numberOfProjectsToDisplay = 3;
	const allProjects = useSelector(selectProject).list;
	const [projectsToDisplay, setProjectsToDisplay] = useState<Project[]>([]);

	useEffect(() => {
		const projectsForDraw = allProjects.filter(
			(project) => project.id !== id && project.id !== 0
		);
		if (projectsForDraw.length === 0) {
			setProjectsToDisplay([]);
			return;
		}
		const shuffled = [...projectsForDraw].sort(() => Math.random() - 0.5);
		const selected = shuffled.slice(
			0,
			Math.min(numberOfProjectsToDisplay, shuffled.length)
		);
		setProjectsToDisplay(selected);
	}, [allProjects, id, numberOfProjectsToDisplay]);

	return (
		<>
			{variant === "cv" && (
				<section className={styles.seeAlsoSectionCV}>
					<ul className={styles.list}>
						{projectsToDisplay.map((project) => (
							<li key={project.id} className={styles.projectItemCV}>
								<Link
									to={`/projects/${project.id}`}
									className={styles.overlayLink}
									children={
										<>
											<div className={styles.textContentCV}>
												<h4>{t(project.name)}</h4>
												<p className={styles.hidden}>
													{t(project.descShort)}
												</p>
											</div>
											<img
												src={getImageByName(project.images[0])}
												alt={`Main image of ${project.name} project`}
												className={styles.projectImageCV}
											/>
										</>
									}
								/>
							</li>
						))}
					</ul>
				</section>
			)}
			{!variant && (
				<section className={styles.seeAlsoSection}>
					<h3>{t("seeAlso")}</h3>
					<ul className={styles.list}>
						{projectsToDisplay.map((project) => (
							<li key={project.id} className={styles.projectItem}>
								<Link
									to={`/projects/${project.id}`}
									className={styles.overlayLink}
									children={
										<>
											<div className={styles.textContent}>
												<h4>{t(project.name)}</h4>
												<p>{t(project.descShort)}</p>
											</div>
											<img
												src={getImageByName(project.images[0])}
												alt={`Main image of ${project.name} project`}
												className={styles.projectImage}
											/>
										</>
									}
								/>
							</li>
						))}
					</ul>
				</section>
			)}
		</>
	);
};

export default SeeAlsoSection;
