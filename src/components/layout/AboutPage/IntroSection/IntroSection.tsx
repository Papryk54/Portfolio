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
						I'm a programmer with a genuine passion for coding. Under the
						guidance of experienced mentors, I've systematized my knowledge and
						keep improving my craft every day by learning, following industry
						trends, and writing code. When challenges arise, that's when the fun
						begins — I see them as puzzles I enjoy breaking down and solving
						step by step.
					</p>
				</div>
			</article>
		</section>
	);
};
export default IntroSection;
