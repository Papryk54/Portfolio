import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageButton.module.scss";
import { setLanguage } from "../../../../../redux/languageChanger/languageChanger.slice";
import { selectCurrentLanguage } from "../../../../../redux/languageChanger/languageChanger.selectors";

const LanguageButton = () => {
	const dispatch = useDispatch();
	const currentLang = useSelector(selectCurrentLanguage);
	const handleLanguageChange = (lang: string) => {
		dispatch(setLanguage(lang));
	};
	return (
		<div className={styles.wrapper}>
			<button
				className={
					styles.button + ` ${currentLang === "PL" ? styles.active : ""}`
				}
				onClick={() => handleLanguageChange("PL")}
			>
				<p>PL</p>
			</button>
			<button
				className={
					styles.button + ` ${currentLang === "EN" ? styles.active : ""}`
				}
				onClick={() => handleLanguageChange("EN")}
			>
				<p>EN</p>
			</button>
		</div>
	);
};

export default LanguageButton;
