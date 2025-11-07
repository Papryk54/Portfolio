import { useGSAP } from "@gsap/react";
import ContactForm from "../../features/ContactForm/ContactForm";
import styles from "./ContactFormSection.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

const ContactFormSection = () => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!wrapperRef.current) return;

		const h2 = wrapperRef.current.querySelector("h2");
		const p = wrapperRef.current.querySelector("p");

		gsap.from(wrapperRef.current, {
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "10% bottom",
				end: "50% bottom",
				scrub: 0.5,
			},
			backgroundColor: "#111111",
			ease: "power1.inOut",
		});

		gsap.to(window, {
			scrollTrigger: {
				trigger: wrapperRef.current,
				start: "center bottom",
				onEnter: () => {
					gsap.to(window, {
						duration: 1,
						ease: "power2.out",
						scrollTo: { y: "max" },
					});
				},
			},
		});

		if (h2) {
			const splitH2 = new SplitText(h2, {
				type: "chars",
				charsClass: "char++",
			});
			gsap.from(splitH2.chars, {
				y: -100,
				opacity: 0,
				rotation: "random(-80, 80)",
				stagger: 0.2,
				duration: 2,
				ease: "elastic.out(1,0.4)",
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "20% 80%",
				},
			});
		}

		if (p) {
			const splitP = new SplitText(p, { type: "words", wordsClass: "word++" });
			gsap.from(splitP.words, {
				y: 100,
				opacity: 0,
				stagger: 0.1,
				duration: 2,
				ease: "elastic.out(1,0.4)",
				scrollTrigger: {
					trigger: wrapperRef.current,
					start: "top 80%",
				},
			});
		}
	}, [wrapperRef]);

	return (
		<section className={styles.wrapper} ref={wrapperRef}>
			<div className={styles.cta}>
				<h2>Contact</h2>
				<p>
					Feel free to reach out for collaborations or just a friendly hello!
				</p>
			</div>
			<div className={styles.formContainer}>
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactFormSection;
