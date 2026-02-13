import { useGSAP } from "@gsap/react";
import styles from "./CopyEmail.module.scss";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CopyEmail = () => {
	const alertRef = useRef(null);
	const [copied, setCopied] = useState(false);
	const { t } = useTranslation();

	const handleCopy = () => {
		const email = "patryk.o.dev@gmail.com";
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard
				.writeText(email)
				.then(() => {
					setCopied(true);
					setTimeout(() => setCopied(false), 6500);
				})
				.catch(() => {
					fallbackCopy(email);
				});
		} else {
			fallbackCopy(email);
		}
	};

	const fallbackCopy = (text: string) => {
		const textarea = document.createElement("textarea");
		textarea.value = text;
		textarea.setAttribute("readonly", "");
		textarea.style.position = "absolute";
		textarea.style.left = "-9999px";
		document.body.appendChild(textarea);
		textarea.select();
		try {
			document.execCommand("copy");
			setCopied(true);
			setTimeout(() => setCopied(false), 6500);
		} catch (err) {
			console.error("Fallback: ", err);
		}
		document.body.removeChild(textarea);
	};

	useGSAP(() => {
		const tl = gsap.timeline();
		if (!copied) return;
		tl.to(alertRef.current, {
			height: "auto",
			duration: 2,
			ease: "power2.out",
		});
		tl.to(alertRef.current, {
			height: 0,
			duration: 3,
			delay: 1.5,
			ease: "power2.out",
		});
	}, [copied]);

	return (
		<div className={styles.info}>
			<div className={styles.alert} ref={alertRef}>
				<p>{t("copied")}</p>
			</div>
			<button className={styles.copyButton} onClick={handleCopy}>
				<p>
					{t("directMail")}
					<span>patryk.o.dev@gmail.com</span>
				</p>
			</button>
		</div>
	);
};

export default CopyEmail;
