import styles from "./ProjectGallery.module.scss";
import githubIcon from "../../../assets/icons/socials/github-mark-white.png";


const ProjectGallery = () => {
	return (
		<div className={styles.projectGallery}>
			<div className={styles.galleryHeader}>
				<h3 className={styles.imageTitle}>Image Title</h3>{" "}
				<a className={styles.githubLink} href="#">
					<img src={githubIcon} alt="githubLogo" />
				</a>
			</div>
			<img src="#" alt="Image" className={styles.imageMain} />
			<div className={styles.otherImages}>
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
				<img src="#" alt="Image" className={styles.imageOther} />
			</div>
		</div>
	);
};

export default ProjectGallery;
