import NavBar from "../../layout/NavBar/NavBar";
import styles from "./ProjectPage.module.scss";
import { useParams } from "react-router-dom";
import ProjectDescription from "../../layout/ProjectDescription/ProjectDescription";
import ProjectGallery from "../../features/ProjectGallery/ProjectGallery";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import SeeAlsoSection from "../../layout/SeeAlsoSection/SeeAlsoSection";
import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";
import { useSelector } from "react-redux";
import {
	selectActiveProject,
	selectActiveProjectImages,
} from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";

const ProjectPage = () => {
	const { id } = useParams<{ id: string }>();
	const numericId = Number(id);
	const images = useSelector(selectActiveProjectImages);
	const imagesSrcs = images.map(getImageByName);
	const activeProject = useSelector(selectActiveProject);

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<header className={styles.projectHeader}>
				<div className={styles.projectImage}>
					<img src={imagesSrcs[0]} alt="" />
				</div>
				{activeProject && (
					<>
						<p className={styles.projectTitle}>{activeProject.name}</p>
						<p className={styles.projectMotto}>{activeProject.descShort}</p>
					</>
				)}
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
