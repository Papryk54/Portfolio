import styles from "./NavBarButtons.module.scss";

const NavBarButtons = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<button className={styles.button}>Home</button>
				</li>
				<li className={styles.item}>
					<button className={styles.button}>About</button>
				</li>
				<li className={styles.item}>
					<button className={styles.button}>My Works</button>
				</li>
				<li className={styles.item}>
					<button className={styles.button}>Contact</button>
				</li>
			</ul>
		</div>
	);
};

export default NavBarButtons;
