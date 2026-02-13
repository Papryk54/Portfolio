import { useRef } from "react";
import TechStack from "../../utils/TechStack/TechStack";
import styles from "./ProjectDescription.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";

const ProjectDescription = () => {
	const desContainerRef = useRef<HTMLDivElement>(null);
	const params = useParams<{ id: string }>();
	const activeProject = useSelector(selectProject).list.find(
		(project) => project.id === Number(params.id),
	);
	const { t } = useTranslation();

	useGSAP(() => {
		if (!desContainerRef.current) return;
		const split = SplitText.create(desContainerRef.current, {
			type: "words",
			aria: "hidden",
		});
		gsap.from(split.words, {
			opacity: 0,
			duration: 0.6,
			ease: "sine.out",
			stagger: 0.07,
		});
	}, [activeProject]);

	return (
		<section className={styles.projectInfo}>
			<div className={styles.description} ref={desContainerRef}>
				<div className={styles.descriptionText}>
					<div className={styles.descriptionParagraphs}>
						<span className={styles.label}>{t("projectDescription")}</span>
						{activeProject?.descRegular.map((paragraph, index) => (
							<p className={styles.descriptionParagraph} key={index}>
								{t(paragraph)}
							</p>
						))}
						<div className={styles.gradient}></div>
					</div>
					<div className={styles.featuresList}>
						<span className={styles.label}>{t("features")}</span>
						<ul className={styles.featuresTable}>
							{activeProject?.features.map((feature, index) => (
								<li
									className={`${styles.feature} ${
										index === activeProject.features.length - 1
											? styles.lastItem
											: ""
									}`}
									key={index}
								>
									<p>{t(feature)}</p>
								</li>
							))}
						</ul>
						<div className={styles.gradientBottom}></div>
					</div>
				</div>
			</div>
			<aside className={styles.technologiesUsed}>
				<TechStack />
			</aside>
		</section>
	);
};
export default ProjectDescription;
