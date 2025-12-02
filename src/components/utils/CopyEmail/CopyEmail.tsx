import { useGSAP } from "@gsap/react";
import styles from "./CopyEmail.module.scss";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const CopyEmail = () => {
	const alertRef = useRef(null);
	const handleCopy = () => {
		navigator.clipboard.writeText("patryk.o.dev@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 6500);
	};
	const [copied, setCopied] = useState(false);
	const { t } = useTranslation();
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
					{t("directMail")}<span>patryk.o.dev@gmail.com</span>
				</p>
			</button>
		</div>
	);
};

export default CopyEmail;
