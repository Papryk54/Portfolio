import NavBar from "../../layout/NavBar/NavBar";
import styles from "./About.module.scss";
import StackIcon from "tech-stack-icons";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";

export const About = () => {
	return (
		<main className={styles.wrapper}>
			<LoadingScreen />
			<NavBar variant="absolute" />
			<aside className={styles.spacer}></aside>
			<header className={styles.heroSection}>
				<section className={styles.introSection}>
					<div className={styles.mark}>
						<h1 className={styles.markText}>About Me</h1>
					</div>
					<article className={styles.aboutIntro}>
						<h2 className={styles.introHeader}>Who am I?</h2>
						<p className={styles.introText}>
							This is a brief introduction about myself.
						</p>
					</article>
					<div className={styles.borderLine}></div>
				</section>
				<section className={styles.skillsPanel}>
					<article className={styles.leftSide}>
						<section className={styles.techStack}>
							<h2 className={styles.skillsSectionHeader}>
								Technologies I work with
							</h2>
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
						</section>
					</article>
					<article className={styles.rightSide}>
						<section className={styles.SoftSkills}>
							<h2 className={styles.skillsSectionHeader}>Soft Skills</h2>
							<ul>
								<li>Problem Solving</li>
								<li>Teamwork</li>
								<li>Maximizing Results</li>
								<li>Time Management</li>
								<li>Work Organization</li>
								<li>Creativity</li>
							</ul>
						</section>
						<section className={styles.languages}>
							<h2 className={styles.skillsSectionHeader}>Languages</h2>
							<ul>
								<li>English - C1</li>
								<li>Polish - Native</li>
							</ul>
						</section>
						<section className={styles.interests}>
							<h2 className={styles.skillsSectionHeader}>Interests</h2>
							<ul>
								<li>AI & Machine Learning</li>
								<li>Technology</li>
							</ul>
						</section>
					</article>
				</section>
				<div className={styles.animatedArrow}>
					<p>↓</p>
				</div>
			</header>
			<aside className={styles.spacer}></aside>
			<section className={styles.mainSection}>
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
						<a
							className={styles.downloadButton}
							href="/assets/my-cv.pdf"
							download
						>
							Download
						</a>
					</div>
				</div>
			</section>
			<section className={styles.contactSection}>
				<ContactFormSection />
			</section>
		</main>
	);
};
