import NavBar from "../../layout/NavBar/NavBar";
import styles from "./About.module.scss";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import CVSection from "../../layout/CVSection/CVSection";
import HeroSection from "../../layout/AboutPage/HeroSection/HeroSection";
import { useRef } from "react";

export const About = () => {
	const contactSectionRef = useRef<HTMLElement>(null);

	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<aside className={styles.spacer}></aside>
			<HeroSection contactSectionRef={contactSectionRef} />
			<CVSection />
			<section className={styles.contactSection} ref={contactSectionRef}>
				<ContactFormSection />
			</section>
		</main>
	);
};
