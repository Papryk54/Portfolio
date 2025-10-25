import { useDispatch, useSelector } from "react-redux";
import styles from "./Logo.module.scss";
import { setLocation } from "../../../../../redux/locationReducer/locationReducer.slice";
import { selectLocation } from "../../../../../redux/locationReducer/locationReducer.selectors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowDark from "../../../../../assets/icons/arrow-dark.png";
import arrowLight from "../../../../../assets/icons/arrow-light.png";

const Logo = () => {
	const [isHovered, setIsHovered] = useState(false);
	const location = useSelector(selectLocation);
	const dispatch = useDispatch();

	const navigate = useNavigate();
	const handleBackToTop = () => {
		dispatch(setLocation("home"));
		navigate("/");
	};

	return (
		<div className={styles.wrapper}>
			<button
				type="button"
				className={styles.logoButton}
				onClick={handleBackToTop}
			>
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
									src={arrowLight}
									alt="Back"
									className={`${styles.backToTopIcon} ${
										!isHovered ? styles.arrowVisible : styles.arrowHidden
									}`}
								/>
								<img
									src={arrowDark}
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
