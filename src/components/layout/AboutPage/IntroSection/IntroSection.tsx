import gsap from "gsap";
import { useTranslation } from "react-i18next";

import githubIcon from "../../../../assets/icons/socials/github-mark.png";
import linkedinIcon from "../../../../assets/icons/socials/linkedin.png";
import styles from "./IntroSection.module.scss";

type IntroSectionProps = {
	contactSectionRef: React.RefObject<HTMLElement | null>;
};

const IntroSection = ({ contactSectionRef }: IntroSectionProps) => {
	const { t } = useTranslation();

	const handleGetInTouch = () => {
		if (contactSectionRef.current) {
			gsap.to(window, {
				duration: 2,
				scrollTo: { y: contactSectionRef.current.offsetTop, autoKill: true },
				ease: "power1.out",
			});
		}
	};
	return (
		<section className={styles.introSection}>
			<div className={styles.mark}>
				<h1 className={styles.markText}>{t("aboutMe", "About Me")}</h1>
			</div>
			<article className={styles.aboutIntro}>
				<div className={styles.introContainer}>
					<h2 className={styles.introHeader}>
						{t("patrykOlszewski", "Patryk Olszewski")}
					</h2>
					<h3 className={styles.name}>FullStack Web Developer</h3>

					<p className={styles.introText}>
						{t(
							"aboutMeIntroText",
							"I'm a programmer with a genuine passion for coding. Under the guidance of experienced mentors, I've systematized my knowledge and keep improving my craft every day by learning, following industry trends, and writing code. When challenges arise, that's when the fun begins — I see them as puzzles I enjoy breaking down and solving step by step.",
						)}
					</p>
				</div>
				<div className={styles.socials}>
					<button className={styles.contactButton} onClick={handleGetInTouch}>
						{t("getInTouch", "Get in Touch!")}
					</button>
					<p className={styles.mail}>patryk.o.dev@gmail.com</p>
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
					</ul>
				</div>
			</article>
		</section>
	);
};
export default IntroSection;
