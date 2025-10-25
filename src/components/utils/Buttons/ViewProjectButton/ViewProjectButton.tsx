import styles from "./ViewProjectButton.module.scss";
import EyeIcon from "../../../../assets/icons/eye.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../../redux/locationReducer/locationReducer.slice";

const ViewProjectButton = ({ to }: { to: string }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const handleShowProject = () => {
		dispatch(setLocation("projectDetailsHeader"));
		navigate(to);
	};
	return (
		<div className={styles.detailsButton}>
			<button className={styles.viewProjectButton} onClick={handleShowProject}>
				View Project
			</button>
			<img src={EyeIcon} className={styles.animationPlaceholder}></img>
		</div>
	);
};

export default ViewProjectButton;
