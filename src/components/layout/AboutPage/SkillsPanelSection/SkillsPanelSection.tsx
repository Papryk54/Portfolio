import StackIcons from "../../../pages/About/StackIcons/StackIcons";
import styles from "./SkillsPanelSection.module.scss";
import { useTranslation } from "react-i18next";

const SkillsPanelSection = () => {
	const { t } = useTranslation();
	return (
		<section className={styles.skillsPanel}>
			<h2 className={styles.skillsSectionHeader}>
				{t("myTechnologiesSkills", "My Technologies & Skills")}
			</h2>
			<article className={styles.leftSide}>
				<StackIcons />
			</article>
			<article className={styles.rightSide}>
				<section className={styles.SoftSkills}>
					<h2 className={styles.skillsSectionHeader}>
						{t("softSkills", "Soft Skills")}
					</h2>
					<ul>
						<li>
							<p>{t("problemSolving", "Problem Solving")}</p>
						</li>
						<li>
							<p>{t("teamwork", "Teamwork")}</p>
						</li>
						<li>
							<p>{t("maximizingResults", "Maximizing Results")}</p>
						</li>
						<li>
							<p>{t("timeManagement", "Time Management")}</p>
						</li>
						<li>
							<p>{t("workOrganization", "Work Organization")}</p>
						</li>
						<li>
							<p>{t("creativity", "Creativity")}</p>
						</li>
					</ul>
				</section>
				<section className={styles.languages}>
					<h2 className={styles.skillsSectionHeader}>
						{t("languages", "Languages")}
					</h2>
					<ul>
						<li>
							<p>{t("englishC1", "English - C1")}</p>
						</li>
						<li>
							<p>{t("polishNative", "Polish - Native")}</p>
						</li>
					</ul>
				</section>
				<section className={styles.interests}>
					<h2 className={styles.skillsSectionHeader}>
						{t("interests", "Interests")}
					</h2>
					<ul>
						<li>
							<p>{t("aiMachineLearning", "AI & Machine Learning")}</p>
						</li>
						<li>
							<p>{t("technology", "Technology")}</p>
						</li>
					</ul>
				</section>
			</article>
		</section>
	);
};
export default SkillsPanelSection;
