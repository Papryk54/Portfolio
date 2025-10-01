import styles from "./Logo.module.scss";

const Logo = () => {
	return (
		<div className={styles.wrapper}>
			<img
				src="/src/assets/images/logo.png"
				alt="Logo"
				className={styles.logo}
			/>
		</div>
	);
};

export default Logo;
