import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";
import styles from "./Slider.module.scss";
import { useSelector } from "react-redux";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface SliderProps {
	activeIndex: number;
	setSwiperRef: (swiper: SwiperType) => void;
	onSlideChange: (index: number) => void;
}

const Slider = ({ activeIndex, setSwiperRef, onSlideChange }: SliderProps) => {
	const project = useSelector(selectProject);
	const imagesSrcs = project.list.map((p) => getImageByName(p.images[0]));
	const swiperInstance = useRef<SwiperType | null>(null);
	const { t } = useTranslation();

	useEffect(() => {
		if (
			swiperInstance.current &&
			typeof swiperInstance.current.slideTo === "function"
		) {
			swiperInstance.current.slideTo(activeIndex);
		}
	}, [activeIndex]);

	return (
		<main className={styles.sliderMain}>
			<Swiper
				grabCursor={true}
				initialSlide={activeIndex}
				centeredSlides={true}
				slidesPerView={4}
				speed={800}
				slideToClickedSlide={true}
				spaceBetween={30}
				onSlideChange={(swiper) => {
					onSlideChange(swiper.activeIndex);
				}}
				onSwiper={(swiper) => {
					swiperInstance.current = swiper;
					setSwiperRef(swiper);
				}}
			>
				{project.list.map((slide, index: number) => (
					<SwiperSlide key={index}>
						<h3 className={styles.slideTitle}>{t(slide.name)}</h3>
						<img
							src={imagesSrcs[index]}
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
