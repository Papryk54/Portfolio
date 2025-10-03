import { useDispatch } from "react-redux";
import styles from "./Logo.module.scss";
import { setLocation } from "../../../../../redux/locationReducer/locationReducer.slice";

const Logo = () => {
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
		</div>
	);
};

export default Logo;
