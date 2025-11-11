import SeeAlsoSection from "../SeeAlsoSection/SeeAlsoSection";
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
			<div className={styles.introduction}>
				<SeeAlsoSection variant="cv" id={0} />
			</div>
			<div className={styles.cvWrapper}>
				<div className={styles.textWrapper}>
					<p className={styles.animatedText}>View my CV</p>
				</div>
				<button className={styles.downloadButton} onClick={downloadCV}>
					Download
				</button>
			</div>
		</section>
	);
};

export default CVSection;
