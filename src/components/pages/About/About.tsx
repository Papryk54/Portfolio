import { useEffect, useState } from "react";
import NavBar from "../../layout/NavBar/NavBar";
import styles from "./About.module.scss";
import { useDispatch } from "react-redux";
import { setLocation } from "../../../redux/locationReducer/locationReducer.slice";
import ContactForm from "../../features/ContactForm/ContactForm";
import StackIcon from "tech-stack-icons";

export const About = () => {
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const load = () => {
		setLoading(true);
		dispatch(setLocation("about"));
		setLoading(false);
	};
	useEffect(() => {
		load();
	}, []);
	return (
		<div className={`${styles.wrapper} ${styles.scrollable}`}>
			{!loading && <NavBar />}
			<div className={styles.spacer}></div>
			<div className={styles.heroSection}>
				<div className={styles.introSection}>
					<div className={styles.mark}>
						<h3 className={styles.markText}>About Me</h3>
					</div>
					<div className={styles.aboutIntro}>
						<p className={styles.introHeader}>Who am I?</p>
						<p className={styles.introText}>
							This is a brief introduction about myself.
						</p>
					</div>
					<div className={styles.borderLine}></div>
				</div>
				<div className={styles.skillsPanel}>
					<div className={styles.leftSide}>
						<div className={styles.techStack}>
							<h4 className={styles.skillsSectionHeader}>
								Technologies I work with
							</h4>
							<div className={styles.category}>
								<p className={styles.techStackItemCategory}>Frontend:</p>
								<ul className={styles.stackIconsList}>
									<li>
										<StackIcon name="html5" className={styles.stackIcon} />
										<span className={styles.stackLabel}>HTML5</span>
									</li>
									<li>
										<StackIcon name="css3" className={styles.stackIcon} />
										<span className={styles.stackLabel}>CSS3</span>
									</li>
									<li>
										<StackIcon name="js" className={styles.stackIcon} />
										<span className={styles.stackLabel}>JavaScript</span>
									</li>
									<li>
										<StackIcon name="react" className={styles.stackIcon} />
										<span className={styles.stackLabel}>React</span>
									</li>
									<li>
										<StackIcon name="redux" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Redux</span>
									</li>
									<li>
										<StackIcon name="typescript" className={styles.stackIcon} />
										<span className={styles.stackLabel}>TypeScript</span>
									</li>
									<li>
										<StackIcon name="vitejs" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Vite.js</span>
									</li>
									<li>
										<StackIcon name="vitejs" className={styles.stackIcon} />
										<span className={styles.stackLabel}>ReactNativedev</span>
									</li>
									<li>
										<StackIcon
											name="tailwindcss"
											className={styles.stackIcon}
										/>
										<span className={styles.stackLabel}>Tailwind CSS</span>
									</li>
									<li>
										<StackIcon name="bootstrap5" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Bootstrap 5</span>
									</li>
									<li>
										<StackIcon name="sass" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Sass</span>
									</li>
									<li>
										<StackIcon name="gsap" className={styles.stackIcon} />
										<span className={styles.stackLabel}>GSAP</span>
									</li>
								</ul>
							</div>
							<div className={styles.category}>
								<p className={styles.techStackItemCategory}>Backend:</p>
								<ul className={styles.stackIconsList}>
									<li>
										<StackIcon name="nodejs" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Node.js</span>
									</li>
									<li>
										<StackIcon name="nestjs" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Nest.js</span>
									</li>
									<li>
										<StackIcon name="mongodb" className={styles.stackIcon} />
										<span className={styles.stackLabel}>MongoDB</span>
									</li>
									<li>
										<StackIcon name="mysql" className={styles.stackIcon} />
										<span className={styles.stackLabel}>MySQL</span>
									</li>
									<li>
										<StackIcon name="prisma" className={styles.stackIcon} />
										<span className={styles.stackLabel}>Prisma</span>
									</li>
									<li>
										<StackIcon name="appwrite" className={styles.stackIcon} />
									</li>
								</ul>
							</div>
							<div className={styles.category}>
								<p className={styles.techStackItemCategory}>Others:</p>
								<ul className={styles.stackIconsList}>
									<li>
										<StackIcon name="figma" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="github" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="postman" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="npm" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="powershell" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="prettier" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="replit" className={styles.stackIcon} />
									</li>
									<li>
										<StackIcon name="electron" className={styles.stackIcon} />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className={styles.rightSide}>
						<div className={styles.SoftSkills}>
							<h4 className={styles.skillsSectionHeader}>Soft Skills</h4>
							<ul>
								<li>Problem Solving</li>
								<li>Teamwork</li>
								<li>Maximizing Results</li>
								<li>Time Management</li>
								<li>Work Organization</li>
								<li>Creativity</li>
							</ul>
						</div>
						<div className={styles.languages}>
							<h4 className={styles.skillsSectionHeader}>Languages</h4>
							<ul>
								<li>English - C1</li>
								<li>Polish - Native</li>
							</ul>
						</div>
						<div className={styles.interests}>
							<h4 className={styles.skillsSectionHeader}>Interests</h4>
							<ul>
								<li>AI & Machine Learning</li>
								<li>Technology</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.animatedArrow}>
					<p>↓</p>
				</div>
			</div>
			<div className={styles.spacer}></div>
			<div className={styles.mainSection}>
				<p className={styles.introduction}>
					I'm a passionate web developer. I love creating dynamic and responsive
					web applications. My journey in web development, started year ago, and
					since then, I've been continuously learning and improving my skills. I
					enjoy working with modern technologies and building projects that
					solve real-world problems.
				</p>
				<div className={styles.imagesSection}>
					<div className={styles.ctaWrapper}>
						<p className={styles.imageText}>View my CV</p>
						<button className={styles.downloadButton}>Download</button>
					</div>
				</div>
			</div>
			<div className={styles.contactSection}>
				<h3>Contact</h3>
				<ContactForm />
			</div>
		</div>
	);
};
