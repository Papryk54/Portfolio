import StackIcons from "../../../pages/About/StackIcons/StackIcons";
import styles from "./SkillsPanelSection.module.scss";

const SkillsPanelSection = () => {
	return (
		<section className={styles.skillsPanel}>
			<h2 className={styles.skillsSectionHeader}>My Technologies & Skills</h2>
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
	);
};
export default SkillsPanelSection;
