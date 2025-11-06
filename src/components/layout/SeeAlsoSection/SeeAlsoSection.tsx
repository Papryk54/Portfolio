import { useSelector } from "react-redux";
import styles from "./SeeAlsoSection.module.scss";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { useEffect, useState } from "react";
import type { Project } from "../../../redux/projectReducer/projectReducer.types";
import { getImageByName } from "../../../utils/images";

type Props = {
	id: number;
};

const SeeAlsoSection = ({ id }: Props) => {
	const numberOfProjectsToDisplay = 3;
	const allProjects = useSelector(selectProject).list;
	const [projectsToDisplay, setProjectsToDisplay] = useState<Project[]>([]);

	useEffect(() => {
		const projectsForDraw = allProjects.filter((project) => project.id !== id);
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
		<section className={styles.seeAlsoSection}>
			<h3>See what I also did</h3>
			<ul className={styles.list}>
				{projectsToDisplay.map((project) => (
					<li key={project.id} className={styles.projectItem}>
						<div className={styles.textContent}>
							<h4>{project.name}</h4>
							<p>{project.description[0]}</p>
						</div>
						<img
							src={getImageByName(project.images[0])}
							alt={`Main image of ${project.name} project`}
							className={styles.projectImage}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SeeAlsoSection;
