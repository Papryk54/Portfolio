import { useSelector } from "react-redux";
import styles from "./ProjectInfo.module.scss";
import { selectActiveProject } from "../../../redux/projectReducer/projectReducer.selectors";
import ViewProjectButton from "../../utils/Buttons/ViewProjectButton/ViewProjectButton";
import TechStack from "../../utils/TechStack/TechStack";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const ProjectInfo = () => {
	const activeProject = useSelector(selectActiveProject);
	const descRef = useRef(null);
	const [resize, setResize] = useState(false);
	const timeoutRef = useRef<number | null>(null);
	const splitInstance = useRef<SplitText | null>(null);

	const handleResize = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setResize((prev) => !prev);
		}, 500);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useGSAP(() => {
		if (!descRef.current) return;
		if (splitInstance.current) splitInstance.current.revert();
		const split = SplitText.create(descRef.current, {
			type: "lines",
			aria: "hidden",
		});
		splitInstance.current = split;
		gsap.from(split.lines, {
			opacity: 0,
			duration: 0.8,
			ease: "sine.out",
			stagger: 0.1,
		});
	}, [activeProject, resize]);

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
				<p className={styles.description} ref={descRef}>
					{activeProject.description}
				</p>
			</div>
		</section>
	);
};

export default ProjectInfo;
