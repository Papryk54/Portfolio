import StackIcon from "tech-stack-icons";
import styles from "./Socials.module.scss";
import linkedinIcon from "../../../assets/icons/socials/linkedin.png";
import githubIcon from "../../../assets/icons/socials/github.png";
import googleIcon from "../../../assets/icons/socials/google.png";

const Socials = () => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.socialLinksList}>
				<li className={styles.socialLinkItem}>
					<a href="#" className={styles.socialLink}>
						<img src={linkedinIcon} alt="LinkedIn" />
					</a>
				</li>
				<li className={styles.socialLinkItem}>
					<a href="#" className={styles.socialLink}>
						<img src={githubIcon} alt="GitHub" />
					</a>
				</li>
				<li className={styles.socialLinkItem}>
					<a href="#" className={styles.socialLink}>
						<img src={googleIcon} alt="Google" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Socials;
