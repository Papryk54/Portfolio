import { useSelector } from "react-redux";
import StackIcon from "tech-stack-icons";
import { selectActiveProject } from "../../../redux/projectReducer/projectReducer.selectors";
import styles from "./TechStack.module.scss";
import arrow from "../../../assets/icons/arrow-light.png";
import { Draggable, gsap } from "gsap/all";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

const TechStack = () => {
	const activeProject = useSelector(selectActiveProject);

	const stackItems = useRef<HTMLDivElement>(null);
	const stackItemsContainer = useRef<HTMLDivElement>(null);
	const arrowRef = useRef<HTMLImageElement>(null);
	const opacityBlockRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!opacityBlockRef.current) return;
		const observer = new window.IntersectionObserver(
			(entries) => {
				setIsVisible(entries[0].isIntersecting);
			},
			{ threshold: 0.1 }
		);
		observer.observe(opacityBlockRef.current);
		return () => observer.disconnect();
	}, []);

	useGSAP(
		() => {
			if (!stackItems.current) return;
			Draggable.create(stackItems.current, {
				type: "x",
				bounds: stackItemsContainer.current,
				inertia: true,
			});
			if (arrowRef.current && opacityBlockRef.current && isVisible) {
				const tl = gsap.timeline({
					repeat: 1,
					yoyo: true,
					onComplete: () => {
						gsap.to(opacityBlockRef.current, { opacity: 0, duration: 1 });
					},
				});
				tl.set(arrowRef.current, { opacity: 0 })
					.to(arrowRef.current, { opacity: 1, duration: 1 })
					.to(arrowRef.current, { opacity: 0, duration: 1, delay: 1 });
			}
		},
		{ dependencies: [activeProject, isVisible] }
	);

	if (!activeProject) return null;

	return (
		<div className={styles.projectStack} ref={stackItemsContainer}>
			<div className={styles.track} ref={stackItems}>
				{activeProject.stack.map((tech) => (
					<div className={styles.stackItem} data-tech={tech} key={tech}>
						<StackIcon
							name={tech}
							className={styles.stackIcon}
							{...(tech === "github" ? { variant: "dark" } : {})}
						/>
						<p className={styles.stackText}>{tech}</p>
					</div>
				))}
			</div>
			<div className={styles.opacityBlock} ref={opacityBlockRef}>
				<img src={arrow} alt="Arrow" className={styles.arrow} ref={arrowRef} />
			</div>
		</div>
	);
};

export default TechStack;
