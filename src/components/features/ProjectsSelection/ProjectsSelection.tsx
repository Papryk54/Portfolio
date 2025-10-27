import styles from "./ProjectsSelection.module.scss";
import Slider from "../../features/Slider/Slider";
import ProjectInfo from "../../layout/ProjectInfo/ProjectInfo";
import arrowDark from "../../../assets/icons/arrow-dark.png";
import { useSelector, useDispatch } from "react-redux";
import {
	selectActiveProject,
	selectProject,
} from "../../../redux/projectReducer/projectReducer.selectors";
import { useRef, useState, useEffect } from "react";
import { setActiveProject } from "../../../redux/projectReducer/projectReducer.slice";
import { Swiper as SwiperType } from "swiper";

const ProjectsSelection = () => {
	const dispatch = useDispatch();
	const projects = useSelector(selectProject);
	const projectsArray = projects.list;
	const activeProject = useSelector(selectActiveProject);
	const [activeIndex, setActiveIndex] = useState<number>(1);
	const swiperRef = useRef<SwiperType | null>(null);

	useEffect(() => {
		if (activeProject) {
			const idx = projectsArray.findIndex((p) => p.id === activeProject.id);
			if (idx !== -1) setActiveIndex(idx);
		}
	}, [activeProject, projectsArray]);

	const handlePrev = () => {
		const newIndex =
			activeIndex > 0 ? activeIndex - 1 : projectsArray.length - 1;
		setActiveIndex(newIndex);
		dispatch(setActiveProject(projectsArray[newIndex].id));
		if (swiperRef.current) swiperRef.current.slideTo(newIndex);
	};

	const handleNext = () => {
		const newIndex =
			activeIndex < projectsArray.length - 1 ? activeIndex + 1 : 0;
		setActiveIndex(newIndex);
		dispatch(setActiveProject(projectsArray[newIndex].id));
		if (swiperRef.current) swiperRef.current.slideTo(newIndex);
	};

	return (
		<section className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.navArrows}>
					<button className={styles.arrowButtonLeft} onClick={handlePrev}>
						<img src={arrowDark} alt="Logo" className={styles.arrowLeft} />
					</button>
					<button className={styles.arrowButtonRight} onClick={handleNext}>
						<img src={arrowDark} alt="Logo" className={styles.arrowRight} />
					</button>
				</div>
				<h2 className={styles.title}>{activeProject?.name}</h2>
			</div>
			<Slider
				activeIndex={activeIndex}
				setSwiperRef={(swiper: SwiperType) => (swiperRef.current = swiper)}
				onSlideChange={(index: number) => {
					setActiveIndex(index);
					dispatch(setActiveProject(projectsArray[index].id));
				}}
			/>
			<ProjectInfo />
		</section>
	);
};

export default ProjectsSelection;
