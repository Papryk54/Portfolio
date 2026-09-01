import styles from "./StackSchowcase.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const technologies = [
	"FullStack",
	"HTML/CSS/JS",
	"TypeScript",
	"React",
	"Redux",
	"Zustand",
	"NestJS",
	"Node.js",
	"MySQL",
	"Prisma",
	"WebSockets",
	"SASS/SCSS",
	"GSAP",
	"Git",
];

const StackSchowcase = () => {
	const trackRef = useRef<HTMLDivElement>(null);
	useGSAP(
		() => {
			if (!trackRef.current) return;

			const itemWidth = 150;
			const pauseDuration = 1.5;
			const moveDuration = 1;

			const timeline = gsap.timeline({
				repeat: -1,
			});

			technologies.forEach((_, index) => {
				timeline.to(trackRef.current, {
					x: -(index + 1) * itemWidth,
					duration: moveDuration,
					ease: "power2.inOut",
				});

				timeline.to(
					{},
					{
						duration: pauseDuration,
					},
				);
			});
		},
		{ scope: trackRef },
	);

	return (
		<div className={styles.showcase}>
			<div className={styles.track} ref={trackRef}>
				<div className={styles.items}>
					{technologies.map((technology) => (
						<p className={styles.showcaseText} key={technology}>
							{technology}
						</p>
					))}
				</div>

				<div className={styles.items} aria-hidden="true">
					{technologies.map((technology) => (
						<p className={styles.showcaseText} key={technology}>
							{technology}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default StackSchowcase;
