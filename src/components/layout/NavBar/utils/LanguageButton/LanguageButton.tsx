import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageButton.module.scss";
import { setLanguage } from "../../../../../redux/languageChanger/languageChanger.slice";
import { selectCurrentLanguage } from "../../../../../redux/languageChanger/languageChanger.selectors";
import i18next from "i18next";

const LanguageButton = () => {
	const dispatch = useDispatch();
	const currentLang = useSelector(selectCurrentLanguage);
	const handleLanguageChange = (lang: "en" | "pl") => {
		dispatch(setLanguage(lang));
		i18next.changeLanguage(lang);
	};
	return (
		<menu className={styles.wrapper}>
			<li>
				<button
					className={
						styles.button + ` ${currentLang === "pl" ? styles.active : ""}`
					}
					onClick={() => handleLanguageChange("pl")}
				>
					<p>PL</p>
				</button>
			</li>
			<li>
				<button
					className={
						styles.button + ` ${currentLang === "en" ? styles.active : ""}`
					}
					onClick={() => handleLanguageChange("en")}
				>
					<p>EN</p>
				</button>
			</li>
		</menu>
	);
};

export default LanguageButton;
