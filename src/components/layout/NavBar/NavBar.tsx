import ContactButton from "../../features/ContactButton/ContactButton";
import NavBarButtons from "../../features/NavBarButtons/NavBarButtons";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Logo />
			</div>
			<div className={styles.center}>
				<NavBarButtons />
			</div>
			<div className={styles.right}>
				<ContactButton />
			</div>
		</div>
	);
};

export default NavBar;
