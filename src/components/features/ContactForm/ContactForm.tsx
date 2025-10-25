import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("mdkwbwvl");
	if (state.succeeded) {
		return <p>Thanks for joining!</p>;
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<label htmlFor="name" className={styles.label}>Name</label>
			<input id="name" type="text" name="name" className={styles.input} />
			<label htmlFor="email" className={styles.label}>Email Address</label>
			<input id="email" type="email" name="email" className={styles.input} />
			<ValidationError prefix="Email" field="email" errors={state.errors} />
			<label htmlFor="message" className={styles.label}>How can I help you?</label>
			<textarea id="message" name="message" className={styles.textarea} />
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<button type="submit" disabled={state.submitting} className={styles.button}>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
