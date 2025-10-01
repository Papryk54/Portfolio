import styles from "./ContactButton.module.scss";

const ContactButton = () => {
	return (
		<div className={styles.wrapper}>
			<button className={styles.button}>
				<img
					src="/src/assets/icons/mail.png"
					className={styles.icon}
					alt="Mail Icon"
				></img>
			</button>
		</div>
	);
};

export default ContactButton;
