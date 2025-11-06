import AnimatedArrow from "../../utils/Animations/AnimatedArrow/AnimatedArrow";
import styles from "./CVSection.module.scss";

const CVSection = () => {
	const downloadCV = async () => {
		try {
			const response = await fetch("/CV_Patryk_Olszewski_fullstack.pdf");
			if (!response.ok) throw new Error("Network response was not ok");
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = "CV_Patryk_Olszewski_fullstack.pdf";
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("CV download failed:", error);
		}
	};
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
				<button className={styles.downloadButton} onClick={downloadCV}>
					Download
				</button>
			</div>
		</section>
	);
};

export default CVSection;
