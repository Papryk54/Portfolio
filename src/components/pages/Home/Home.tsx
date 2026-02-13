import { useRef } from "react";
import NavBar from "../../layout/NavBar/NavBar";
import WelcomePanel from "../../layout/WelcomePanel/WelcomePanel";
import styles from "./Home.module.scss";
import ProjectsSelection from "../../features/ProjectsSelection/ProjectsSelection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Observer from "gsap/Observer";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";

const Home = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(Observer);
	useGSAP(() => {
		if (window.innerWidth > 768) {
			Observer.create({
				target: window,
				type: "wheel",
				preventDefault: true,
				wheelSpeed: 1,
				tolerance: 100,
				onChangeY: (self) => {
					let deltaY = self.deltaY;
					const eventType = self.event.type;
					if (eventType && eventType.startsWith("touch")) {
						deltaY = -deltaY;
					}
					if (deltaY > 0) {
						if (projectsRef.current) {
							gsap.to(window, {
								scrollTo: { y: projectsRef.current },
								duration: 0.5,
							});
						}
					} else if (deltaY < 0) {
						if (homeRef.current) {
							gsap.to(window, {
								scrollTo: { y: homeRef.current },
								duration: 0.5,
							});
						}
					}
				},
			});
		}
	});

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="fixed" />
			<section ref={homeRef} className={styles.homePanel}>
				<WelcomePanel />
				<AnimatedArrow />
				<div className={styles.gradientOverlay} />
			</section>

			<section ref={projectsRef} className={styles.projectsPanel}>
				<ProjectsSelection />
			</section>
		</main>
	);
};

export default Home;
