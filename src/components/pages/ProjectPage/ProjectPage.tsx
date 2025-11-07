import NavBar from "../../layout/NavBar/NavBar";
import styles from "./ProjectPage.module.scss";
import { useParams } from "react-router-dom";
import ProjectDescription from "../../layout/ProjectDescription/ProjectDescription";
import ProjectGallery from "../../features/ProjectGallery/ProjectGallery";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import SeeAlsoSection from "../../layout/SeeAlsoSection/SeeAlsoSection";
import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";

const ProjectPage = () => {
	const { id } = useParams<{ id: string }>();
	const numericId = Number(id);

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<header className={styles.projectHeader}>
				<div className={styles.projectImage}></div>
				<p className={styles.projectTitle}>Project Name</p>
				<p className={styles.projectMotto}>Main idea of the project</p>
				<AnimatedArrow />
			</header>
			<section className={styles.mainSection}>
				<ProjectDescription />
				<ProjectGallery />
			</section>
			<SeeAlsoSection id={numericId} />
			<ContactFormSection />
		</main>
	);
};

export default ProjectPage;
