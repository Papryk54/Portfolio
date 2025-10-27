import { useEffect, useRef } from "react";
import styles from "./CustomScroll.module.scss";

const CustomScroll = () => {
	const thumbRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const thumb = thumbRef.current;
		if (!thumb) return;

		const updateThumb = () => {
			const docHeight = document.documentElement.scrollHeight;
			const viewHeight = window.innerHeight;
			const scrollTop = window.scrollY;

			const thumbHeight = (viewHeight / docHeight) * viewHeight;
			const thumbTop = (scrollTop / docHeight) * viewHeight;

			thumb.style.height = `${thumbHeight}px`;
			thumb.style.transform = `translateY(${thumbTop}px)`;
		};

		window.addEventListener("scroll", updateThumb);
		updateThumb();

		return () => window.removeEventListener("scroll", updateThumb);
	}, []);

	return (
		<div className={styles.customScroll}>
			<div ref={thumbRef} className={styles.customThumb}></div>
		</div>
	);
};

export default CustomScroll;
