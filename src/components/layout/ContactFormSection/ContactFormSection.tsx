import { useGSAP } from "@gsap/react";
import ContactForm from "../../features/ContactForm/ContactForm";
import styles from "./ContactFormSection.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import CopyEmail from "../../utils/CopyEmail/CopyEmail";
import { t } from "i18next";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ContactFormSection = () => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!wrapperRef.current) return;

		const h2 = wrapperRef.current.querySelector("h2");
		const p = wrapperRef.current.querySelector("p");

		const tl = gsap.timeline();

		tl.from(wrapperRef.current, {
			backgroundColor: "#111111",
			duration: 1,
			ease: "power1.inOut",
		});

		if (h2) {
			const splitH2 = new SplitText(h2, {
				type: "chars",
				charsClass: "char++",
			});

			tl.from(
				splitH2.chars,
				{
					y: -100,
					opacity: 0,
					rotation: "random(-80, 80)",
					stagger: 0.2,
					duration: 2,
					ease: "elastic.out(1,0.4)",
				},
				"<"
			);
		}

		if (p) {
			const splitP = new SplitText(p, { type: "words", wordsClass: "word++" });

			tl.from(
				splitP.words,
				{
					y: 600,
					opacity: 0,
					stagger: 0.1,
					duration: 2,
					ease: "power2.out",
				},
				"<"
			);
		}

		const isMobile = window.innerWidth <= 768;
		ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: isMobile ? "top 80%" : "top 40%",
			end: "bottom 100%",
			scrub: 2,
			animation: tl,
		});
	}, []);

	return (
		<section className={styles.wrapper} ref={wrapperRef}>
			<div className={styles.cta}>
				<h2>{t("contact")}</h2>
				<p>{t("contactCTA")}</p>
			</div>

			<div className={styles.formContainer}>
				<ContactForm />
			</div>

			<CopyEmail />
		</section>
	);
};

export default ContactFormSection;
