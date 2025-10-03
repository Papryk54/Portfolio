import { useDispatch, useSelector } from "react-redux";
import styles from "./Logo.module.scss";
import { setLocation } from "../../../../../redux/locationReducer/locationReducer.slice";
import { selectLocation } from "../../../../../redux/locationReducer/locationReducer.selectors";
import { useState } from "react";

const Logo = () => {
	const [isHovered, setIsHovered] = useState(false);
	const location = useSelector(selectLocation);
	const dispatch = useDispatch();
	const handleBackToTop = () => {
		dispatch(setLocation("home"));
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.logoButton} onClick={handleBackToTop}>
				<img
					src="/src/assets/images/logo.png"
					alt="Logo"
					className={styles.logo}
				/>
			</button>
			<div className={styles.logoText}>
				{location === "home" && (
					<p className={styles.logoName}>Patryk Olszewski</p>
				)}
				{location === "projects" && (
					<button
						className={styles.backToTopButton}
						onClick={handleBackToTop}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						onTouchStart={() => setIsHovered(true)}
						onTouchEnd={() => setIsHovered(false)}
					>
						<div className={styles.backToTopContainer}>
							<div className={styles.arrowFadeWrapper}>
								<img
									src="/src/assets/images/arrow-light.png"
									alt="Back"
									className={`${styles.backToTopIcon} ${
										!isHovered ? styles.arrowVisible : styles.arrowHidden
									}`}
								/>
								<img
									src="/src/assets/images/arrow-dark.png"
									alt="Back"
									className={`${styles.backToTopIcon} ${
										isHovered ? styles.arrowVisible : styles.arrowHidden
									}`}
								/>
							</div>
							<p className={styles.backToTopText}>Wróć na górę</p>
						</div>
					</button>
				)}
			</div>
		</div>
	);
};

export default Logo;
