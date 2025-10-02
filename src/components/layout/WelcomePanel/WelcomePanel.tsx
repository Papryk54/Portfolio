import styles from "./WelcomePanel.module.scss";

const WelcomePanel = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.slider}>
				<p className={styles.sliderText}>Developer</p>
			</div>
			<div className={styles.text}>
				<h3 className={styles.name}>Patryk Olszewski</h3>
				<p className={styles.introduction}>
					Welcome to my portfolio! I'm Patryk Olszewski, a full stack web
					developer. In this space, I'll share a glimpse into my work and what I
					love to do.
				</p>
			</div>
			<div className={styles.scrollDown}>
				<div className={styles.scrollTextWrapper}>
					<p className={styles.scrollText}>Scroll</p>
				</div>
				<button className={styles.scrollButton}>
					<p>Enter</p>
				</button>
			</div>
		</div>
	);
};

export default WelcomePanel;
