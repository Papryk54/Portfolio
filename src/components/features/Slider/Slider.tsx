import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";
import styles from "./Slider.module.scss";
import { useSelector } from "react-redux";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";
import { useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";

interface SliderProps {
	activeIndex: number;
	setSwiperRef: (swiper: SwiperType) => void;
	onSlideChange: (index: number) => void;
}

const Slider = ({ activeIndex, setSwiperRef, onSlideChange }: SliderProps) => {
	const project = useSelector(selectProject);
	const { t } = useTranslation();

	const images = useMemo(
		() => project.list.map((p) => getImageByName(p.images[0])),
		[project.list]
	);

	const swiperRef = useRef<SwiperType | null>(null);
	const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	useEffect(() => {
		titleRefs.current.forEach((ref, i) => {
			if (ref) {
				if (i === activeIndex) {
					gsap.to(ref, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" });
				} else {
					gsap.to(ref, {
						y: -40,
						opacity: 0,
						duration: 0.5,
						ease: "power2.in",
					});
				}
			}
		});
	}, [activeIndex, project.list]);

	useEffect(() => {
		swiperRef.current?.slideTo(activeIndex);
	}, [activeIndex]);

	return (
		<main className={styles.sliderMain}>
			<Swiper
				grabCursor
				initialSlide={activeIndex}
				centeredSlides
				slidesPerView={2}
				breakpoints={{
					540: { slidesPerView: 3 },
					768: { slidesPerView: 4 },
				}}
				speed={600}
				slideToClickedSlide
				spaceBetween={30}
				onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
					setSwiperRef(swiper);
				}}
			>
				{project.list.map((slide, i) => (
					<SwiperSlide key={slide.id}>
						<img
							src={images[i]}
							alt={slide.name}
							className={styles.slideImage}
						/>
						<h3
							className={styles.slideTitle}
							ref={(el) => {
								titleRefs.current[i] = el;
							}}
							style={{ transform: "translateY(40px)", opacity: 0 }}
						>
							{t(slide.name)}
						</h3>
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
};

export default Slider;
