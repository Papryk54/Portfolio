import { useSelector } from "react-redux";
import { selectCurrentLanguage } from "../../../redux/languageChanger/languageChanger.selectors";
import styles from "./About.module.scss";

const About = () => {
	const currentLang = useSelector(selectCurrentLanguage);
	return (
		<div className={styles.wrapper}>
			<h1>{currentLang === "PL" ? "O Mnie" : "About Me"}</h1>
		</div>
	);
};

export default About;
