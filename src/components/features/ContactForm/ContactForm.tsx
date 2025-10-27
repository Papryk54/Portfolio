import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const ContactForm = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const submitTextRef = useRef<HTMLSpanElement>(null);
	const formContainerRef = useRef<HTMLFormElement>(null);

	const [state, handleSubmit] = useForm("mdkwbwvl");
	
	useGSAP(() => {
		if (formContainerRef.current) {
			gsap.from(formContainerRef.current, {
				scale: 0.5,
				opacity: 0,
				duration: 1.5,
				ease: "power4.out",
				scrollTrigger: {
					trigger: formContainerRef.current,
					start: "top 80%",
				},
			});
		};

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
		return <p>Thanks for joining!</p>;
	}

	const animateFocus = (el: HTMLElement | null) => {
		if (!el) return;
		gsap.to(el, {
			backgroundColor: "#111111",
			borderRadius: 8,
			duration: 0.25,
			ease: "power4.out",
		});
	};

	const animateBlur = (el: HTMLElement | null) => {
		if (!el) return;
		gsap.to(el, {
			backgroundColor: "transparent",
			borderRadius: 0,
			duration: 0.25,
			ease: "power2.out",
		});
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form} ref={formContainerRef}>
			<label htmlFor="name" className={styles.label}>
				Name
			</label>
			<input
				id="name"
				type="text"
				name="name"
				className={styles.input}
				ref={nameRef}
				onFocus={() => animateFocus(nameRef.current)}
				onBlur={() => animateBlur(nameRef.current)}
			/>

			<label htmlFor="email" className={styles.label}>
				Email Address
			</label>
			<input
				id="email"
				type="email"
				name="email"
				className={styles.input}
				ref={emailRef}
				onFocus={() => animateFocus(emailRef.current)}
				onBlur={() => animateBlur(emailRef.current)}
			/>
			<ValidationError prefix="Email" field="email" errors={state.errors} />

			<label htmlFor="message" className={styles.label}>
				How can I help you?
			</label>
			<textarea
				id="message"
				name="message"
				className={styles.textarea}
				ref={messageRef}
				onFocus={() => animateFocus(messageRef.current)}
				onBlur={() => animateBlur(messageRef.current)}
			/>
			<ValidationError prefix="Message" field="message" errors={state.errors} />

			<button
				type="submit"
				disabled={state.submitting}
				className={styles.button}
				ref={submitButtonRef}
			>
				<span className={styles.btnText} ref={submitTextRef}>
					Send
				</span>
			</button>
		</form>
	);
};

export default ContactForm;
