import { useSelector } from "react-redux";
import StackIcon from "tech-stack-icons";
import type { RootState } from "../../../redux/store";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import styles from "./TechStack.module.scss";
import arrow from "../../../assets/icons/arrow-light.png";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const TechStack = () => {
	const id = useSelector((state: RootState) => state.project.activeId);
	const project = useSelector(selectProject);
	const projectItem = project.list.find((item) => item.id === id);

	const stackItems = useRef<HTMLDivElement>(null);
	const stackItemsContainer = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!stackItems.current) return;
		Draggable.create(stackItems.current, {
			type: "x",
			bounds: stackItemsContainer.current,
			inertia: true,
		});
	});
	if (!projectItem) return null;

	return (
		<div className={styles.projectStack} ref={stackItemsContainer}>
			<div className={styles.track} ref={stackItems}>
				{projectItem?.stack.map((tech) => (
					<div className={`${styles.stackItem} ${styles[tech]}`} key={tech}>
						<StackIcon name={tech} className={styles.stackIcon} />
						<p className={styles.stackText}>- {tech}</p>
					</div>
				))}
			</div>
			<img src={arrow} alt="Arrow" className={styles.arrow} />
		</div>
	);
};

export default TechStack;
