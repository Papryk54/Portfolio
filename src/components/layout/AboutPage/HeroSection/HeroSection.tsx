import IntroSection from "../IntroSection/IntroSection";
import SkillsPanelSection from "../SkillsPanelSection/SkillsPanelSection";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
	contactSectionRef: React.RefObject<HTMLElement | null>;
};

const HeroSection = ({ contactSectionRef }: HeroSectionProps) => {
	return (
		<header className={styles.heroSection}>
			<IntroSection contactSectionRef={contactSectionRef} />
			<section className={styles.skillsPanelSection}>
				<SkillsPanelSection />
			</section>
		</header>
	);
};

export default HeroSection;
