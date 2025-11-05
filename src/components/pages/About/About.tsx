import NavBar from "../../layout/NavBar/NavBar";
import styles from "./About.module.scss";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import CVSection from "../../layout/CVSection/CVSection";
import HeroSection from "../../layout/AboutPage/HeroSection/HeroSection";

export const About = () => {
	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<aside className={styles.spacer}></aside>
			<HeroSection />
			<CVSection />
			<section className={styles.contactSection}>
				<ContactFormSection />
			</section>
		</main>
	);
};
