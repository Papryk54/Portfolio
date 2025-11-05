import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";
import styles from "./CVSection.module.scss";

const CVSection = () => {
	return (
		<section className={styles.cvSection}>
			<div className={`${styles.corner} ${styles.top} ${styles.left}`}></div>
			<div className={`${styles.corner} ${styles.top} ${styles.right}`}></div>
			<div className={`${styles.corner} ${styles.bottom} ${styles.left}`}></div>
			<div
				className={`${styles.corner} ${styles.bottom} ${styles.right}`}
			></div>
			<p className={styles.introduction}>
				Jestem programistą z prawdziwą pasją do kodowania. Pod okiem
				doświadczonych mentorów usystematyzowałem swoją wiedzę i każdego dnia
				rozwijam swój warsztat, ucząc się, śledząc branżowe trendy i kodując.
				Kiedy pojawiają się trudności, właśnie wtedy zaczyna się dla mnie
				zabawa, bo traktuję je jak łamigłówki, które z przyjemnością rozkładam
				na części i rozwiązuję krok po kroku.
			</p>
			<div className={styles.cvWrapper}>
				<div className={styles.textWrapper}>
					<p className={styles.animatedText}>View my CV</p>
				</div>
				<AnimatedArrow />
				<button className={styles.downloadButton}>Download</button>
			</div>
		</section>
	);
};

export default CVSection;
