import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const submitTextRef = useRef<HTMLSpanElement>(null);
	const formContainerRef = useRef<HTMLFormElement>(null);

	const [state, handleSubmit] = useForm("mdkwbwvl");
	const { t } = useTranslation();

	useGSAP(() => {
		if (formContainerRef.current) {
			gsap.from(formContainerRef.current, {
				scale: 0.1,
				opacity: 0,
				duration: 2.5,
				ease: "power4.out",
				scrollTrigger: {
					trigger: formContainerRef.current,
					start: "top 100%",
				},
			});
		}

		if (submitButtonRef.current) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: submitButtonRef.current,
					start: "top bottom-=100",
				},
			});
			tl.to({}, { duration: 5 });
			tl.to(submitButtonRef.current, {
				rotate: 2,
				x: 4,
				duration: 0.1,
				ease: "power1.inOut",
			})
				.to(submitButtonRef.current, {
					rotate: -2,
					x: -4,
					duration: 0.1,
					ease: "power1.inOut",
					yoyo: true,
					repeat: 5,
				})
				.to(submitButtonRef.current, {
					rotate: 0,
					x: 0,
					duration: 0.1,
				})
				.to({}, { duration: 5 })
				.to(submitButtonRef.current, {
					rotate: 2,
					x: 4,
					duration: 0.1,
					ease: "power1.inOut",
				})
				.to(submitButtonRef.current, {
					rotate: -2,
					x: -4,
					duration: 0.1,
					ease: "power1.inOut",
					yoyo: true,
					repeat: 5,
				})
				.to(submitButtonRef.current, {
					rotate: 0,
					x: 0,
					duration: 0.1,
				})
				.to({}, { duration: 8 })
				.to(submitButtonRef.current, {
					rotate: 2,
					x: 4,
					duration: 0.1,
					ease: "power1.inOut",
				})
				.to(submitButtonRef.current, {
					rotate: -2,
					x: -4,
					duration: 0.1,
					ease: "power1.inOut",
					yoyo: true,
					repeat: 5,
				})
				.to(submitButtonRef.current, { rotate: 0, duration: 0.1 });
		}
	});
	if (state.succeeded) {
		return <p>{t("contactFormSuccess")}</p>;
	}

	const animateFocus = (el: HTMLElement | null) => {
		if (!el) return;
		gsap.to(el, {
			backgroundColor: "#99142f",
			borderRadius: 8,
			scale: 1.01,
			duration: 0.25,
			ease: "power4.out",
		});
	};

	const animateBlur = (el: HTMLElement | null) => {
		if (!el) return;
		gsap.to(el, {
			backgroundColor: "transparent",
			borderRadius: 8,
			scale: 1,
			duration: 0.25,
			ease: "power2.out",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.form}
			ref={formContainerRef}
		>
			<div className={styles.inputGroup}>
				<label htmlFor="name" className={styles.label}>
					{t("contactFormName")}
				</label>
				<input
					id="name"
					type="text"
					name="name"
					className={styles.input}
					ref={nameRef}
					onFocus={() => animateFocus(nameRef.current)}
					onBlur={() => animateBlur(nameRef.current)}
					placeholder={t("contactFormNamePlaceholder")}
				/>
			</div>
			<div className={styles.inputGroup}>
				<label htmlFor="email" className={styles.label}>
					{t("contactFormEmail")}
				</label>
				<input
					id="email"
					type="email"
					name="email"
					className={styles.input}
					ref={emailRef}
					onFocus={() => animateFocus(emailRef.current)}
					onBlur={() => animateBlur(emailRef.current)}
					placeholder={t("contactFormEmailPlaceholder")}
				/>
				<ValidationError
					prefix={t("contactFormEmail")}
					field="email"
					errors={state.errors}
				/>
			</div>
			<div className={styles.textareaGroup}>
				<label htmlFor="message" className={styles.label}>
					{t("contactFormMessage")}
				</label>
				<textarea
					id="message"
					name="message"
					className={styles.textarea}
					ref={messageRef}
					onFocus={() => animateFocus(messageRef.current)}
					onBlur={() => animateBlur(messageRef.current)}
					placeholder={t("contactFormMessagePlaceholder")}
				/>
				<ValidationError
					prefix={t("contactFormMessage")}
					field="message"
					errors={state.errors}
				/>
			</div>
			<button
				type="submit"
				disabled={state.submitting}
				className={styles.button}
				ref={submitButtonRef}
			>
				<span className={styles.btnText} ref={submitTextRef}>
					{t("contactFormSend")}
				</span>
			</button>
		</form>
	);
};

export default ContactForm;
