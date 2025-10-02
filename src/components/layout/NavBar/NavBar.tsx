import Logo from "./utils/Logo/Logo";
import styles from "./NavBar.module.scss";
import LanguageButton from "./utils/ContactButton/LanguageButton";

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Logo />
			</div>
			<div className={styles.right}>
				<LanguageButton />
			</div>
		</div>
	);
};

export default NavBar;
