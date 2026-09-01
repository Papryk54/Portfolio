import SeeAlsoSection from "../SeeAlsoSection/SeeAlsoSection";
import styles from "./CVSection.module.scss";
import { useTranslation } from "react-i18next";
import downloadIcon from "../../../assets/icons/download.png";

const CVSection = () => {
	const { t } = useTranslation();
	const downloadCV = async () => {
		try {
			// const lang = i18n.language === "pl" ? "pl" : "en";
			const fileName = `CV_Patryk_Olszewski_FullStack_EN.pdf`;
			const response = await fetch(`/${fileName}`);
			if (!response.ok) throw new Error("Network response was not ok");
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = fileName;
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
			<div className={styles.seeAlsoWrapper}>
				<SeeAlsoSection variant="cv" id={0} />
			</div>
			<div className={styles.cvWrapper}>
				<div className={styles.textWrapper}>
					<p className={styles.animatedText}>{t("viewCV", "View my CV")} </p>
				</div>
				<button className={styles.downloadButton} onClick={downloadCV}>
					<img
						className={styles.downloadIcon}
						src={downloadIcon}
						alt="Download icon"
					/>
				</button>
			</div>
		</section>
	);
};

export default CVSection;
