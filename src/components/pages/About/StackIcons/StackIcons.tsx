import StackIcon from "tech-stack-icons";
import styles from "./StackIcons.module.scss";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const StackIcons = () => {
	const catContainerRef = useRef(null);
	useGSAP(() => {
		gsap.to(styles.stackIcon, {
			opacity: 0,
			duration: 3,
		});
	}, { scope: catContainerRef });
	return (
		<section className={styles.techStack}>
			<div className={styles.categoriesContainer} ref={catContainerRef}>
				<div className={styles.category}>
					<p className={styles.techStackItemCategory}>Frontend</p>
					<ul className={styles.stackIconsList}>
						<li>
							<StackIcon
								name="html5"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>HTML5</span>
						</li>
						<li>
							<StackIcon
								name="css3"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>CSS3</span>
						</li>
						<li>
							<StackIcon
								name="js"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>JavaScript</span>
						</li>
						<li>
							<StackIcon
								name="react"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>React</span>
						</li>
						<li>
							<StackIcon
								name="redux"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Redux</span>
						</li>
						<li>
							<StackIcon
								name="typescript"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>TypeScript</span>
						</li>
						<li>
							<StackIcon
								name="vitejs"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Vite.js</span>
						</li>
						<li>
							<StackIcon
								name="react"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>React Native</span>
						</li>
						<li>
							<StackIcon
								name="tailwindcss"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Tailwind CSS</span>
						</li>
						<li>
							<StackIcon
								name="bootstrap5"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Bootstrap 5</span>
						</li>
						<li>
							<StackIcon
								name="sass"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Sass</span>
						</li>
						<li>
							<StackIcon
								name="gsap"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>GSAP</span>
						</li>
					</ul>
				</div>
				<div className={styles.category}>
					<p className={styles.techStackItemCategory}>Backend</p>
					<ul className={styles.stackIconsList}>
						<li>
							<StackIcon
								name="nodejs"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Node.js</span>
						</li>
						<li>
							<StackIcon
								name="nestjs"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Nest.js</span>
						</li>
						<li>
							<StackIcon
								name="mongodb"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>MongoDB</span>
						</li>
						<li>
							<StackIcon
								name="mysql"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>MySQL</span>
						</li>
						<li>
							<StackIcon
								name="prisma"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Prisma</span>
						</li>
						<li>
							<StackIcon
								name="appwrite"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Appwrite</span>
						</li>
					</ul>
				</div>
				<div className={styles.category}>
					<p className={styles.techStackItemCategory}>Others</p>
					<ul className={styles.stackIconsList}>
						<li>
							<StackIcon
								name="figma"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Figma</span>
						</li>
						<li>
							<StackIcon
								name="github"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>GitHub</span>
						</li>
						<li>
							<StackIcon
								name="postman"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Postman</span>
						</li>
						<li>
							<StackIcon
								name="npm"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>NPM</span>
						</li>
						<li>
							<StackIcon
								name="powershell"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>PowerShell</span>
						</li>
						<li>
							<StackIcon
								name="prettier"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Prettier</span>
						</li>
						<li>
							<StackIcon
								name="replit"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Replit</span>
						</li>
						<li>
							<StackIcon
								name="electron"
								variant="dark"
								className={styles.stackIcon}
							/>
							<span className={styles.stackLabel}>Electron</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default StackIcons;
