import styles from "./ViewProjectButton.module.scss";
import EyeIcon from "../../../../assets/icons/eye.png";
import { Link } from "react-router-dom";

const ViewProjectButton = ({ to }: { to: string }) => {
	return (
		<div className={styles.detailsButton}>
			<Link to={to} className={styles.viewProjectButton}>
				<p>View Project</p>
			</Link>
			<img src={EyeIcon} className={styles.animationPlaceholder}></img>
		</div>
	);
};

export default ViewProjectButton;
