import { useGSAP } from "@gsap/react";
import styles from "./CopyEmail.module.scss";
import gsap from "gsap";
import { useRef, useState } from "react";

const CopyEmail = () => {
	const alertRef = useRef(null);
	const handleCopy = () => {
		navigator.clipboard.writeText("patryk.o.dev@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 6500);
	};
	const [copied, setCopied] = useState(false);
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
				<p>Copied!</p>
			</div>
			<button className={styles.copyButton} onClick={handleCopy}>
				<p>
					...or mail me directly at<span>patryk.o.dev@gmail.com</span>
				</p>
			</button>
		</div>
	);
};

export default CopyEmail;
