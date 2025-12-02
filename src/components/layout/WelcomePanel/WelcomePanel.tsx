import StackSchowcase from "../../features/StackSchowcase/StackSchowcase";
import Socials from "../Socials/Socials";
import styles from "./WelcomePanel.module.scss";
import { useTranslation } from "react-i18next";
import enterImg from "../../../assets/icons/enter.png";

const WelcomePanel = () => {
	const { t } = useTranslation();
	return (
		<header className={styles.wrapper}>
			<StackSchowcase />
			<div className={styles.text}>
				<h3 className={styles.name}>{t("hi")} {t("name")}</h3>
				<p className={styles.introduction}>
					{t("introduction")}
				</p>
			</div>
			<div className={styles.scrollDown}>
				<div className={styles.scrollTextWrapper}>
					<p className={styles.scrollText}>{t("scroll")}</p>
				</div>
				<button className={styles.scrollButton}>
					<img src={enterImg} alt="Enter" />
				</button>
			</div>
			<Socials />
		</header>
	);
};

export default WelcomePanel;
