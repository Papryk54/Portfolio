import styles from "./IntroSection.module.scss";

const IntroSection = () => {
	return (
		<section className={styles.introSection}>
			<div className={styles.mark}>
				<h1 className={styles.markText}>About Me</h1>
			</div>
			<article className={styles.aboutIntro}>
				<h2 className={styles.introHeader}>Who am I?</h2>
				<div className={styles.introContainer}>
					<h3 className={styles.name}>Patryk Olszewski</h3>
					<p className={styles.introText}>
						I am a passionate fullstack web developer who loves turning ideas
						into reality. I thrive on solving complex problems and creating
						beautiful, functional web applications. My dedication to learning
						and improving drives me to stay up-to-date with the latest
						technologies, always aiming to deliver the best possible solutions.
					</p>
				</div>
			</article>
		</section>
	);
};
export default IntroSection;
