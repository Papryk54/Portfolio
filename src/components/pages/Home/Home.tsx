import { useEffect, useRef, useState } from "react";
import NavBar from "../../layout/NavBar/NavBar";
import WelcomePanel from "../../layout/WelcomePanel/WelcomePanel";
import ProjectsSelection from "../ProjectsSelection/ProjectsSelection";
import styles from "./Home.module.scss";

const Home = () => {
	const [showProjects, setShowProjects] = useState(false);
	const homeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = (e: WheelEvent) => {
			if (!showProjects && Math.abs(e.deltaY) > 5) {
				setShowProjects(true);
			}
		};
		window.addEventListener("wheel", handleScroll, { passive: true });
		return () => window.removeEventListener("wheel", handleScroll);
	}, [showProjects]);

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<div
				ref={homeRef}
				className={`${styles.homePanel} ${showProjects ? styles.hide : ""}`}
			>
				<WelcomePanel />
			</div>
			<div
				className={`${styles.projectsPanel} ${showProjects ? styles.show : ""}`}
			>
				<ProjectsSelection />
			</div>
		</div>
	);
};

export default Home;
