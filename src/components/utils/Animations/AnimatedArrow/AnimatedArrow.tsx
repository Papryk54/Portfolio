import { useRef } from "react";
import styles from "./AnimatedArrow.module.scss";

const AnimatedArrow = () => {
	const arrowContainerRef = useRef(null);
	return (
		<div className={styles.arrowContainer} ref={arrowContainerRef}>
			<div className={styles.arrow}>V</div>
		</div>
	);
};

export default AnimatedArrow;
