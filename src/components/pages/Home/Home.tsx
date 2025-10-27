import { useRef } from "react";
import NavBar from "../../layout/NavBar/NavBar";
import WelcomePanel from "../../layout/WelcomePanel/WelcomePanel";
import styles from "./Home.module.scss";
import ProjectsSelection from "../../features/ProjectsSelection/ProjectsSelection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";

const Home = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(Observer);
	useGSAP(() => {
		Observer.create({
			target: window,
			type: "wheel,touch,scroll",
			preventDefault: true,
			wheelSpeed: 1,
			onDown: () => {
				if (projectsRef.current) {
					gsap.to(window, {
						scrollTo: {
							y: projectsRef.current,
						},
						duration: 0.5,
					});
				}
			},
			onUp: () => {
				if (homeRef.current) {
					gsap.to(window, {
						scrollTo: {
							y: homeRef.current,
						},
						duration: 0.5,
					});
				}
			},
		});
	});

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="fixed" />
			<section ref={homeRef} className={styles.homePanel}>
				<WelcomePanel />
			</section>
			<section ref={projectsRef} className={styles.projectsPanel}>
				<ProjectsSelection />
			</section>
		</main>
	);
};

export default Home;
