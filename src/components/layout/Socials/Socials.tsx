import styles from "./Socials.module.scss";
import linkedinIcon from "../../../assets/icons/socials/linkedin.png";
import githubIcon from "../../../assets/icons/socials/github-mark.png";
import mailIcon from "../../../assets/icons/socials/email.png";

const Socials = () => {
	return (
		<aside className={styles.wrapper}>
			<ul className={styles.socialLinksList}>
				<li className={styles.socialLinkItem}>
					<a
						href="https://www.linkedin.com/in/patrykodev"
						target="_blank"
						className={styles.socialLink}
					>
						<img src={linkedinIcon} alt="LinkedIn" />
					</a>
				</li>
				<li className={styles.socialLinkItem}>
					<a
						href="https://github.com/patryk-o-dev"
						target="_blank"
						className={styles.socialLink}
					>
						<img src={githubIcon} alt="GitHub" />
					</a>
				</li>
				<li className={styles.socialLinkItem}>
					<a href="/contact" target="_blank" className={styles.socialLink}>
						<img src={mailIcon} alt="Mail" />
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default Socials;
