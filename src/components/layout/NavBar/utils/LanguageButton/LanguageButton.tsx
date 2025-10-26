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
		<menu className={styles.wrapper}>
			<li>
				<button
					className={
						styles.button + ` ${currentLang === "PL" ? styles.active : ""}`
					}
					onClick={() => handleLanguageChange("PL")}
				>
					<p>PL</p>
				</button>
			</li>
			<li>
				<button
					className={
						styles.button + ` ${currentLang === "EN" ? styles.active : ""}`
					}
					onClick={() => handleLanguageChange("EN")}
				>
					<p>EN</p>
				</button>
			</li>
		</menu>
	);
};

export default LanguageButton;
