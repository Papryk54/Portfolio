import Logo from "../Logo/Logo";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<div className={styles.wrapper}>
			<Logo />
			<div className={styles.navBarButtons}>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>My Works</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
 