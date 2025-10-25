import styles from "./ProjectGallery.module.scss";
import githubIcon from "../../../assets/icons/socials/github-mark-white.png";
import { useSelector } from "react-redux";
import { selectActiveProjectImages } from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";
import { useState } from "react";

const ProjectGallery = () => {
	const images = useSelector(selectActiveProjectImages);
	const imagesSrcs = images.map(getImageByName);
	const [mainImgSrc, setMainImgSrc] = useState(
		imagesSrcs[0] || "placeholder.png"
	);

	const handleImageClick = (src: string) => {
		setMainImgSrc(src);
	};

	return (
		<div className={styles.projectGallery}>
			<div className={styles.galleryHeader}>
				<h3 className={styles.imageTitle}>Image Title</h3>{" "}
				<a className={styles.githubLink} href="#">
					<img src={githubIcon} alt="githubLogo" />
				</a>
			</div>
			<img
				src={mainImgSrc || "/placeholder.png"}
				alt="Image"
				className={styles.imageMain}
			/>
			<div className={styles.otherImages}>
				{imagesSrcs.map((src, i) => (
					<img
						key={i}
						src={src || "/placeholder.png"}
						alt={`Image ${i}`}
						className={styles.imageOther}
						onClick={() => handleImageClick(src)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectGallery;
