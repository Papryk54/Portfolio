import IntroSection from "../IntroSection/IntroSection";
import SkillsPanelSection from "../SkillsPanelSection/SkillsPanelSection";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
	return (
		<header className={styles.heroSection}>
			<IntroSection />
			<SkillsPanelSection />
		</header>
	);
};

export default HeroSection;
