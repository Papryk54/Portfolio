import NavBar from "../../layout/NavBar/NavBar";
import styles from "./ProjectPage.module.scss";
import { useParams } from "react-router-dom";
import ProjectDescription from "../../layout/ProjectDescription/ProjectDescription";
import ProjectGallery from "../../features/ProjectGallery/ProjectGallery";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import SeeAlsoSection from "../../layout/SeeAlsoSection/SeeAlsoSection";
import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";
import { useSelector, useDispatch } from "react-redux";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { setActiveProject } from "../../../redux/projectReducer/projectReducer.slice";
import { getImageByName } from "../../../utils/images";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProjectPage = () => {
	const params = useParams<{ id: string }>();
	const dispatch = useDispatch();
	const projectList = useSelector(selectProject).list;
	const activeProject = projectList.find(
		(project) => project.id === Number(params.id),
	);
	const images = activeProject?.images || [];
	const imagesSrcs = images.map(getImageByName);
	const { t } = useTranslation();

	const bgRef = useRef<HTMLDivElement>(null);
	const titleRef1 = useRef<HTMLHeadingElement>(null);
	const titleRef2 = useRef<HTMLHeadingElement>(null);
	const [showArrow, setShowArrow] = useState(false);
	const arrowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (params.id) {
			dispatch(setActiveProject(Number(params.id)));
		}
	}, [params.id, dispatch]);

	useGSAP(() => {
		const tl = gsap.timeline({
			onComplete: () => setShowArrow(true),
		});
		if (bgRef.current) {
			tl.from(bgRef.current, {
				filter: "blur(0px) brightness(1) grayscale(0) saturate(1)",
				duration: 3,
				ease: "power2.out",
			});
		}
		if (titleRef1.current) {
			tl.to(
				titleRef1.current,
				{
					scale: 0.6,
					duration: 3,
					ease: "power2.out",
					y: "-15%",
					filter: "none",
				},
				"<",
			);
		}
		if (titleRef2.current) {
			tl.to(
				titleRef2.current,
				{ scale: 0.6, duration: 3, ease: "power2.out" },
				"<",
			);
		}
	}, []);

	useGSAP(() => {
		if (showArrow && arrowRef.current) {
			gsap.fromTo(
				arrowRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 1, ease: "power2.out" },
			);
		}
	}, [showArrow]);

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<header className={styles.projectHeader}>
				{imagesSrcs[0] && (
					<div className={styles.projectBg}>
						<div
							className={styles.projectBgImage}
							style={{ backgroundImage: `url(${imagesSrcs[0]})` }}
							ref={bgRef}
						/>
						<div className={styles.projectBgGradient} />
					</div>
				)}
				<div className={styles.headerContent} ref={titleRef1}>
					{activeProject && (
						<>
							<h1 className={styles.projectTitle}>{t(activeProject.name)}</h1>
							<p className={styles.projectMotto}>
								{t(activeProject.descShort)}
							</p>
						</>
					)}
				</div>
				{showArrow && (
					<div ref={arrowRef}>
						<AnimatedArrow />
					</div>
				)}
			</header>
			<section className={styles.mainSection}>
				<ProjectDescription />
				<ProjectGallery />
			</section>
			<SeeAlsoSection id={params.id ? Number(params.id) : 1} />
			<section className={styles.contactSection}>
				<ContactFormSection />
			</section>
		</main>
	);
};

export default ProjectPage;
