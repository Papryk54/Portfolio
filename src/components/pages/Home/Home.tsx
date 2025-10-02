import { useEffect, useRef } from "react";
import NavBar from "../../layout/NavBar/NavBar";
import WelcomePanel from "../../layout/WelcomePanel/WelcomePanel";
import ProjectsSelection from "../ProjectsSelection/ProjectsSelection";
import styles from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectLocation } from "../../../redux/locationReducer/locationReducer.selectors";
import { setLocation } from "../../../redux/locationReducer/locationReducer.slice";

const Home = () => {
	const homeRef = useRef<HTMLDivElement>(null);
	const location = useSelector(selectLocation);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleScroll = (e: WheelEvent) => {
			if (location === "home" && Math.abs(e.deltaY) > 5) {
				dispatch(setLocation("projects"));
			}
		};
		window.addEventListener("wheel", handleScroll, { passive: true });
		return () => window.removeEventListener("wheel", handleScroll);
	}, [location, dispatch]);

	return (
		<div className={styles.wrapper}>
			<NavBar />
			<div
				ref={homeRef}
				className={`${styles.homePanel} ${
					location === "projects" ? styles.hide : ""
				}`}
			>
				<WelcomePanel />
			</div>
			<div
				className={`${styles.projectsPanel} ${
					location === "projects" ? styles.show : ""
				}`}
			>
				<ProjectsSelection />
			</div>
		</div>
	);
};

export default Home;
