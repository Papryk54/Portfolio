import styles from "./ViewProjectButton.module.scss";
import EyeIcon from "../../../../assets/icons/eye.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { gsap } from "gsap";

const ViewProjectButton = ({ to }: { to: string }) => {
	const { t } = useTranslation();
	const eye = useRef<HTMLImageElement>(null);
	const animating = useRef(false);

	const handleMouseEnter = () => {
		if (eye.current && !animating.current) {
			animating.current = true;
			gsap.to(eye.current, {
				scaleY: 0.05,
				duration: 0.2,
				yoyo: true,
				repeat: 3,
				ease: "power1.inOut",
				onComplete: () => {
					gsap.to(eye.current, {
						scaleY: 1,
						duration: 0.2,
						ease: "power1.inOut",
						onComplete: () => {
							animating.current = false;
						},
					});
				},
			});
		}
	};

	return (
		<div className={styles.detailsButton}>
			<Link
				to={to}
				className={styles.viewProjectButton}
				onMouseEnter={handleMouseEnter}
			>
				{to === "/about" && <p>{t("learnMoreAboutMe")}</p>}
				{to !== "/about" && <p>{t("viewProject")}</p>}
			</Link>
			<img src={EyeIcon} className={styles.animationEye} ref={eye} />
		</div>
	);
};

export default ViewProjectButton;
