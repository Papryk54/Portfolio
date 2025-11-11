import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import CopyEmail from "../../utils/CopyEmail/CopyEmail";
import styles from "./Contact.module.scss";

const Contact = () => {
	return (
		<main className={styles.wrapper}>
			<ContactFormSection />
			<CopyEmail />
		</main>
	);
};

export default Contact;
