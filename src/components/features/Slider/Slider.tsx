import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import styles from "./Slider.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProject } from "../../../redux/projectReducer/projectReducer.slice";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";

const Slider = () => {
	const dispatch = useDispatch();
	const project = useSelector(selectProject);

	return (
		<main className={styles.sliderMain}>
			<Swiper
				grabCursor={true}
				initialSlide={1}
				centeredSlides={true}
				slidesPerView={4}
				speed={800}
				slideToClickedSlide={true}
				spaceBetween={30}
				onSlideChange={(swiper) =>
					dispatch(setActiveProject(swiper.activeIndex))
				}
				onSwiper={(swiper) => console.log(swiper)}
			>
				{project.list.map((slide, index) => (
					<SwiperSlide key={index}>
						<h3 className={styles.slideTitle}>{slide.name}</h3>
						<p className={styles.slideDescription}>{slide.description}</p>
						<img
							src={slide.image}
							alt={slide.name}
							className={styles.slideImage}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
};

export default Slider;
