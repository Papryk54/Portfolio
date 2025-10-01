import { createPortal } from "react-dom";
import styles from "./BgcBlur.module.scss";

type BlurBallProps = {
	size?: "small" | "medium" | "large";
	color?: "primary" | "accent" | "green" | "red";
	position?: "left1" | "left2" | "left3" | "right1" | "right2" | "right3";
};

const blurBalls: BlurBallProps[] = [
	{ size: "medium", color: "primary", position: "left1" },
	{ size: "large", color: "accent", position: "right2" },
	{ size: "small", color: "green", position: "left3" },
	{ size: "medium", color: "red", position: "right1" },
	{ size: "large", color: "primary", position: "left2" },
	{ size: "small", color: "accent", position: "right3" },
	{ size: "medium", color: "green", position: "left1" },
	{ size: "large", color: "red", position: "right2" },
	{ size: "small", color: "primary", position: "left3" },
	{ size: "medium", color: "accent", position: "right1" },
	{ size: "large", color: "green", position: "left2" },
	{ size: "small", color: "red", position: "right3" },
	{ size: "medium", color: "primary", position: "left1" },
	{ size: "large", color: "accent", position: "right2" },
	{ size: "small", color: "green", position: "left3" },
];

const offsets: number[] = [];
let currentTop = 0;
for (let i = 0; i < blurBalls.length; i++) {
	const offset = 300;
	if (i % 5 === 0 && i !== 0) {
		currentTop += 100;
	} else if (i % 4 === 0 && i !== 0) {
		currentTop += 400;
	} else if (i % 3 === 0 && i !== 0) {
		currentTop += 300;
	} else if (i % 2 === 0 && i !== 0) {
		currentTop += 200;
	} else {
		currentTop += 200;
	}
	offsets.push(currentTop);
	currentTop += offset;
}

const BgcBlur = () => {
	return createPortal(
		<div className={styles.bgBlurWrapper}>
			{blurBalls.map((ball, index) => (
				<div
					key={index}
					className={`${styles.blurBall} ${styles[ball.size ?? "medium"]} ${
						styles[ball.color ?? "primary"]
					} ${styles[ball.position ?? "left1"]}`}
					style={{
						position: "absolute",
						top: `${offsets[index]}px`,
					}}
				/>
			))}
		</div>,
		document.body
	);
};

export default BgcBlur;
