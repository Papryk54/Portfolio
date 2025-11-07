import { useRef } from "react";
import styles from "./AnimatedArrow.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arrowLight from "../../../../assets/icons/arrow-light.png";

const AnimatedArrow = () => {
	const arrowContainerRef = useRef<HTMLDivElement | null>(null);
	const arrowRef1 = useRef<HTMLImageElement | null>(null);
	const arrowRef2 = useRef<HTMLImageElement | null>(null);
	const arrowRef3 = useRef<HTMLImageElement | null>(null);

	useGSAP(() => {
		const nodes = [
			arrowRef1.current,
			arrowRef2.current,
			arrowRef3.current,
		].filter(Boolean) as HTMLElement[];

		if (nodes.length === 0) return;

		if (arrowRef1.current) gsap.set(arrowRef1.current, { opacity: 1 });
		if (arrowRef2.current) gsap.set(arrowRef2.current, { opacity: 0.75 });
		if (arrowRef3.current) gsap.set(arrowRef3.current, { opacity: 0.45 });

		const tween = gsap.to(nodes, {
			y: -20,
			duration: 1.5,
			ease: "sine.inOut",
			stagger: { each: 0.5, from: "start" },
			repeat: -1,
			yoyo: true,
		});

		return () => tween.kill();
	});

	return (
		<div className={styles.arrowContainer} ref={arrowContainerRef}>
			<div className={styles.arrows}>
				<img
					src={arrowLight}
					ref={arrowRef1}
					className={styles.arrow}
					alt="V"
				/>
				<img
					src={arrowLight}
					ref={arrowRef2}
					className={styles.arrow}
					alt="V"
				/>
				<img
					src={arrowLight}
					ref={arrowRef3}
					className={styles.arrow}
					alt="V"
				/>
			</div>
		</div>
	);
};

export default AnimatedArrow;
