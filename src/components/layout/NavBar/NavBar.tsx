import Logo from "./utils/Logo/Logo";
import styles from "./NavBar.module.scss";
import LanguageButton from "./utils/LanguageButton/LanguageButton";
import { useSelector } from "react-redux";
import { selectLocation } from "../../../redux/locationReducer/locationReducer.selectors";

const NavBar = () => {
	const location = useSelector(selectLocation);

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Logo />
			</div>
			{location === "projects" && (
				<div className={styles.center}>
					<button className={styles.projectNav}>About me</button>
					<button className={styles.projectNav}>DevCompanion</button>
					<button className={styles.projectNav}>Team Project</button>
					<button className={styles.projectNav}>Online Store</button>
					<button className={styles.projectNav}>Mobile app</button>
					<button className={styles.projectNav}>Game</button>
				</div>
			)}
			<div className={styles.right}>
				<LanguageButton />
			</div>
		</div>
	);
};

export default NavBar;
