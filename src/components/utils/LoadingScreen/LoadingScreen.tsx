import { useEffect, useRef } from "react";
import styles from "./LoadingScreen.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const LoadingScreen = () => {
	const wrapperRef = useRef(null);
	const leftRef = useRef(null);
	const rightRef = useRef(null);
	const spinnerRef = useRef(null);
	const { t } = useTranslation();

	useEffect(() => {
		gsap.killTweensOf(window);
		gsap.to(window, { scrollTo: { y: 0 }, duration: 0.1 });
	}, []);

	useGSAP(() => {
		const tl = gsap.timeline({
			delay: 0.7,
		});
		tl.to(leftRef.current, {
			xPercent: -200,
			duration: 1.5,
			ease: "power3.inOut",
		})
			.to(
				rightRef.current,
				{
					xPercent: 200,
					duration: 1.5,
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
					<h3 className={styles.name}>{t("name")} Olszewski</h3>
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
