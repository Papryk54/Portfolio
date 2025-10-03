import styles from "./ProjectsSelection.module.scss";

const ProjectsSelection = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.navArrows}>
					<button className={styles.arrowButtonLeft}>
						<p>{"<"}</p>
					</button>
					<button className={styles.arrowButtonRight}>
						<p>{">"}</p>
					</button>
				</div>
				<h2 className={styles.title}>ABOUT ME</h2>
			</div>
			<div className={styles.imgGallery}>
				<img src="/src/assets/images/placeholderImg.png" alt="About me" />
				<img src="/src/assets/images/placeholderImg.png" alt="DevCompanion" />
				<img src="/src/assets/images/placeholderImg.png" alt="Team Project" />
				<img src="/src/assets/images/placeholderImg.png" alt="Online Store" />
				<img src="/src/assets/images/placeholderImg.png" alt="Mobile App" />
				<img src="/src/assets/images/placeholderImg.png" alt="Game" />
			</div>
			<p className={styles.description}>
				Here you can select and view various projects that showcase my skills
				and experience as a full stack web developer.
			</p>
			<button className={styles.viewProjectsButton}>Open Project</button>
			<div className={styles.sectionFooter}>
				<ul className={styles.footerLinks}>
					<li className={styles.footerLinkItem}>
						<a href="#" className={styles.footerLink}>
							LinkedIn
						</a>
					</li>
					<li className={styles.footerLinkItem}>
						<a href="#" className={styles.footerLink}>
							Github
						</a>
					</li>
					<li className={styles.footerLinkItem}>
						<a href="#" className={styles.footerLink}>
							Mail
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProjectsSelection;
