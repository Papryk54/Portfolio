import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import styles from "./Contact.module.scss";
import { useEffect, useState } from "react";

const Contact = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 768);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<main className={styles.wrapper}>
			{isDesktop && <ContactFormSection />}
			{!isDesktop && (
				<div className={styles.mobileHeightLimiter}>
					<ContactFormSection />
				</div>
			)}
		</main>
	);
};

export default Contact;
