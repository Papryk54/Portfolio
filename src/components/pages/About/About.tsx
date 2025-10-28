import NavBar from "../../layout/NavBar/NavBar";
import styles from "./About.module.scss";
import ContactFormSection from "../../layout/ContactFormSection/ContactFormSection";
import LoadingScreen from "../../utils/LoadingScreen/LoadingScreen";
import StackIcons from "./StackIcons/StackIcons";
import myFoto from "../../../assets/.placeholders/placeholderImg4.png";

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
						<div className={styles.fotoContainer}>
							<img src={myFoto} alt="Logo" />
							<div className={styles.introContainer}>
								<h3 className={styles.name}>Patryk Olszewski</h3>
								<p className={styles.introText}>
									I am a passionate fullstack web developer who loves turning
									ideas into reality. I thrive on solving complex problems and
									creating beautiful, functional web applications. My dedication
									to learning and improving drives me to stay up-to-date with
									the latest technologies, always aiming to deliver the best
									possible solutions.
								</p>
							</div>
						</div>
					</article>
				</section>
				<section className={styles.skillsPanel}>
					<h2 className={styles.skillsSectionHeader}>
						My Technologies & Skills
					</h2>
					<article className={styles.leftSide}>
						<StackIcons />
					</article>
					<article className={styles.rightSide}>
						<section className={styles.SoftSkills}>
							<h2 className={styles.skillsSectionHeader}>Soft Skills</h2>
							<ul>
								<li>
									<p>Problem Solving</p>
								</li>
								<li>
									<p>Teamwork</p>
								</li>
								<li>
									<p>Maximizing Results</p>
								</li>
								<li>
									<p>Time Management</p>
								</li>
								<li>
									<p>Work Organization</p>
								</li>
								<li>
									<p>Creativity</p>
								</li>
							</ul>
						</section>
						<section className={styles.languages}>
							<h2 className={styles.skillsSectionHeader}>Languages</h2>
							<ul>
								<li>
									<p>English - C1</p>
								</li>
								<li>
									<p>Polish - Native</p>
								</li>
							</ul>
						</section>
						<section className={styles.interests}>
							<h2 className={styles.skillsSectionHeader}>Interests</h2>
							<ul>
								<li>
									<p>AI & Machine Learning</p>
								</li>
								<li>
									<p>Technology</p>
								</li>
							</ul>
						</section>
					</article>
				</section>
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
