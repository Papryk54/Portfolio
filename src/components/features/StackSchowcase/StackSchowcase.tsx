import styles from "./StackSchowcase.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const StackSchowcase = () => {
	const timeline = gsap.timeline({
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
	});
	useGSAP(() => {
		timeline.to("#s", {
			x: -150,
			duration: 4,
			ease: "power4.inOut",
		});

		timeline.to("#s", {
			x: -300,
			duration: 4,
			ease: "power3.inOut",
		});

		timeline.to("#s", {
			x: -450,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -600,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -750,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -900,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -1050,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -1200,
			duration: 4,
			ease: "power2.inOut",
		});

		timeline.to("#s", {
			x: -1350,
			duration: 4,
			ease: "power2.inOut",
		});
	}, []);
	return (
		<div className={styles.wrapper}>
			<div className={styles.showcase}>
				<p className={styles.showcaseText} id="s">
					FullStack
				</p>
				<p className={styles.showcaseText} id="s">
					HTML/CSS/JS
				</p>
				<p className={styles.showcaseText} id="s">
					TypeScript
				</p>
				<p className={styles.showcaseText} id="s">
					React
				</p>
				<p className={styles.showcaseText} id="s">
					Redux
				</p>
				<p className={styles.showcaseText} id="s">
					NestJs
				</p>
				<p className={styles.showcaseText} id="s">
					MySQL
				</p>
				<p className={styles.showcaseText} id="s">
					PostgreSQL
				</p>
				<p className={styles.showcaseText} id="s">
					MongoDB
				</p>
				<p className={styles.showcaseText} id="s">
					Appwrite
				</p>
				<p className={styles.showcaseText} id="s">
					SASS/SCSS
				</p>
				<p className={styles.showcaseText} id="s">
					GSAP
				</p>
				<p className={styles.showcaseText} id="s">
					FullStack
				</p>
			</div>
		</div>
	);
};

export default StackSchowcase;
