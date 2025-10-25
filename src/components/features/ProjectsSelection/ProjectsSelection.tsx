import styles from "./ProjectsSelection.module.scss";
import Slider from "../../features/Slider/Slider";
import ProjectDescryption from "../../layout/ProjectDescryption/ProjectDescryption";
import Socials from "../../layout/Socials/Socials";
import arrowDark from "../../../assets/icons/arrow-dark.png";

const ProjectsSelection = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.navArrows}>
					<button className={styles.arrowButtonLeft}>
						<img
							src={arrowDark}
							alt="Logo"
							className={styles.arrowLeft}
						/>
					</button>
					<button className={styles.arrowButtonRight}>
						<img
							src={arrowDark}
							alt="Logo"
							className={styles.arrowRight}
						/>
					</button>
				</div>
				<h2 className={styles.title}>ABOUT ME</h2>
			</div>
			<Slider />
			<ProjectDescryption />
			<Socials />
		</div>
	);
};

export default ProjectsSelection;
