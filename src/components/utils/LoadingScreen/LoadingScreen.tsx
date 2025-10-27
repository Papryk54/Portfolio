import { useRef } from "react";
import styles from "./LoadingScreen.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../../../assets/images/logo.png";

const LoadingScreen = () => {
	const wrapperRef = useRef(null);
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const spinnerRef = useRef(null);

	useGSAP(() => {
		gsap.to(window, {
			scrollTo: 0,
			duration: 0,
		});
		const tl = gsap.timeline({
			delay: 0.5,
		});

		tl.to(leftRef.current, {
			xPercent: -100,
			duration: 1,
			ease: "power3.inOut",
		})
			.to(
				rightRef.current,
				{
					xPercent: 100,
					duration: 1,
					ease: "power3.inOut",
				},
				0
			)
			.to(
				spinnerRef.current,
				{
					opacity: 0,
					scale: 0.5,
					duration: 0.4,
					ease: "power2.inOut",
				},
				0
			);
	});

	return (
		<main className={styles.loadingScreen} ref={wrapperRef}>
			<div className={styles.left} ref={leftRef}>
				<div className={styles.logoContainer}>
					<img src={logo} alt="Logo" />
					<h3 className={styles.name}>Patryk Olszewski</h3>
				</div>
			</div>
			<div className={styles.right} ref={rightRef}>
				<div className={styles.professionAndSpinner}>
					<div className={styles.profession}>
						<h2>Full Stack Developer</h2>
					</div>
					<div className={styles.spinner} ref={spinnerRef}></div>
				</div>
			</div>
		</main>
	);
};

export default LoadingScreen;
