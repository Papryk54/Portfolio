import Logo from "./utils/Logo/Logo";
import styles from "./NavBar.module.scss";
import LanguageButton from "./utils/LanguageButton/LanguageButton";
import logoImage from "../../../assets/images/logo.png";

type Params = {
	variant?: "fixed" | "absolute";
};

const NavBar = ({ variant }: Params) => {
	return (
		<nav
			className={styles.wrapper}
			style={{ position: variant ? variant : "fixed" }}
		>
			<div className={styles.left}>
				<Logo logoImage={logoImage} />
			</div>
			<div className={styles.right}>
				<LanguageButton />
			</div>
		</nav>
	);
};

export default NavBar;
