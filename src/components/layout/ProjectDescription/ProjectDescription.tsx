import { useRef } from "react";
import TechStack from "../../utils/TechStack/TechStack";
import styles from "./ProjectDescription.module.scss";
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import { selectActiveProject } from "../../../redux/projectReducer/projectReducer.selectors";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ProjectDescription = () => {
	const desContainerRef = useRef<HTMLDivElement>(null);
	const activeProject = useSelector(selectActiveProject);

	useGSAP(() => {
		if (!desContainerRef.current) return;
		const split = SplitText.create(desContainerRef.current, {
			type: "words",
			aria: "hidden",
		});
		gsap.from(split.words, {
			opacity: 0,
			duration: 1,
			ease: "sine.out",
			stagger: 0.1,
		});
	}, [activeProject]);

	return (
		<section className={styles.projectInfo}>
			<div className={styles.description} ref={desContainerRef}>
				<div className={styles.descriptionText}>
					<span className={styles.descLabel}>Description:</span>
					{activeProject?.description.map((paragraph, index) => (
						<p className={styles.descriptionParagraph} key={index}>
							{paragraph}
						</p>
					))}
					<span className={styles.descLabel}>Features:</span>
					<ul>
						{activeProject?.features.map((feature, index) => (
							<li className={styles.feature} key={index}>
								<p>{feature}</p>
							</li>
						))}
					</ul>
					<span className={styles.descLabel}>Future Development:</span>
					<ul>
						{activeProject?.futureDevelopment.map((futureDev, index) => (
							<li className={styles.futureDevelopment} key={index}>
								<p>{futureDev}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<aside className={styles.technologiesUsed}>
				<TechStack />
			</aside>
		</section>
	);
};
export default ProjectDescription;
