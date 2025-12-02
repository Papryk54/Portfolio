import styles from "./ViewProjectButton.module.scss";
import EyeIcon from "../../../../assets/icons/eye.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ViewProjectButton = ({ to }: { to: string }) => {
	const { t } = useTranslation();
	return (
		<div className={styles.detailsButton}>
			<Link to={to} className={styles.viewProjectButton}>
				<p>{t("viewProject")}</p>
			</Link>
			<img src={EyeIcon} className={styles.animationPlaceholder}></img>
		</div>
	);
};

export default ViewProjectButton;
