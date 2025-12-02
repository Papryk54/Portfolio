import gsap from "gsap";
import styles from "./Logo.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Logo = () => {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const { t } = useTranslation();

	const handleGoToTop = () => {
		gsap.to(window, {
			scrollTo: {
				y: 0,
			},
			duration: 1,
			ease: "power2.inOut",
		});
	};

	return (
		<div className={styles.wrapper}>
			{isHome && (
				<button onClick={handleGoToTop} className={styles.logoButton}>
					<img
						src="/src/assets/images/logo.png"
						alt="Logo"
						className={styles.logo}
					/>
				</button>
			)}
			{!isHome && (
				<Link to={"/"} className={styles.logoButton}>
					<img
						src="/src/assets/images/logo.png"
						alt="Logo"
						className={styles.logo}
					/>
				</Link>
			)}

			<div className={styles.logoText}>
				<p className={styles.logoName}>{t("name")} Olszewski</p>
			</div>
		</div>
	);
};

export default Logo;
