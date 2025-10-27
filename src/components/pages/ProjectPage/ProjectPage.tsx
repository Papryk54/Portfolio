import NavBar from "../../layout/NavBar/NavBar";
import styles from "./ProjectPage.module.scss";
import arrowIcon from "../../../assets/icons/arrow-light.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveProject } from "../../../redux/projectReducer/projectReducer.slice";
import ProjectDescription from "../../layout/ProjectDescription/ProjectDescription";
import ProjectGallery from "../../features/ProjectGallery/ProjectGallery";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";

const ProjectPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams<{ id: string }>();
	const mainRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const load = async () => {
		dispatch(setActiveProject(Number(id)));
	};

	useEffect(() => {
		load();
	}, []);

	const handleGoToMainSection = () => {
		if (mainRef.current) {
			gsap.to(window, {
				duration: 1,
				scrollTo: { y: mainRef.current.offsetTop },
				ease: "power2.inOut",
			});
		}
	};

	return (
		<main ref={wrapperRef} className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<header ref={headerRef} className={styles.projectHeader}>
				<div className={styles.projectImage}></div>
				<p className={styles.projectTitle}>Project Name</p>
				<p className={styles.projectMotto}>Main idea of the project</p>
				<button className={styles.goDownButton} onClick={handleGoToMainSection}>
					<img src={arrowIcon} alt="V" />
					<img src={arrowIcon} alt="V" />
					<img src={arrowIcon} alt="V" />
				</button>
			</header>
			<section ref={mainRef} className={styles.mainSection}>
				<ProjectDescription />
				<ProjectGallery />
			</section>
			{/* <section className={styles.seeAlsoSection}>
						<p>also see section</p>
					</section> */}
			<ContactFormSection />
		</main>
	);
};

export default ProjectPage;
