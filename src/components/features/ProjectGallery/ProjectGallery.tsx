import styles from "./ProjectGallery.module.scss";
import githubIcon from "../../../assets/icons/socials/github-mark-white.png";
import { useSelector } from "react-redux";
import { selectActiveProjectImages } from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";

const ProjectGallery = () => {
	const images = useSelector(selectActiveProjectImages);
	const imagesSrcs = images.map(getImageByName);
	const [mainImgSrc, setMainImgSrc] = useState(
		imagesSrcs[0] || "placeholder.png"
	);
	const imgContainerRef = useRef<HTMLImageElement>(null);
	const imgMainRef = useRef<HTMLImageElement>(null);
	const normalSizeContainerRef = useRef<HTMLDivElement>(null);
	const fullSizeContainerRef = useRef<HTMLDivElement>(null);
	const fullSizeButtonRef = useRef<HTMLButtonElement>(null);
	const [isFullSize, setIsFullSize] = useState(false);

	const handleImageMouseEnter = (img: HTMLImageElement | null) => {
		if (img) {
			gsap.to(img, {
				y: 0,
				duration: 0.5,
				ease: "power2.out",
			});
		}
	};

	const handleImageMouseLeave = (img: HTMLImageElement | null) => {
		if (img) {
			gsap.to(img, {
				y: 20,
				duration: 0.5,
				ease: "power2.out",
			});
		}
	};

	useGSAP(() => {
		if (imgContainerRef.current) {
			gsap.to(".img", {
				y: 20,
				duration: 1,
				ease: "power2.out",
				stagger: 0.2,
			});
		}
	});

	const handleFullSize = () => {
		const imgMain = imgMainRef.current;
		const normalSizeContainer = normalSizeContainerRef.current;
		const fullSizeContainer = fullSizeContainerRef.current;
		if (!imgMain || !normalSizeContainer || !fullSizeContainer) return;

		const state = Flip.getState(imgMain);

		if (imgMain.parentNode === normalSizeContainer) {
			fullSizeContainer.appendChild(imgMain);
			setIsFullSize(true);
		} else {
			normalSizeContainer.appendChild(imgMain);
			setIsFullSize(false);
		}

		Flip.from(state, {
			duration: 1,
			ease: "power4.out",
			scale: true,
		});
	};

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
			<div
				className={`${styles.fullSizeImgContainer} ${
					isFullSize ? "" : styles.hidden
				}`}
				ref={fullSizeContainerRef}
			></div>
			{isFullSize && (
				<div className={styles.fullSizeMode}>
					<button onClick={handleFullSize} ref={fullSizeButtonRef}></button>
				</div>
			)}
			<div className={styles.mainImageContainer} ref={normalSizeContainerRef}>
				{!isFullSize && (
					<p className={styles.imageHoverText} onClick={handleFullSize}>
						Click for full size
					</p>
				)}
				<img
					src={mainImgSrc || "/placeholder.png"}
					alt="Image"
					ref={imgMainRef}
					className={`${styles.imageMain} mainImg`}
				/>
			</div>
			<div className={styles.otherImages} ref={imgContainerRef}>
				{imagesSrcs.map((src, i) => (
					<img
						key={i}
						src={src || "/placeholder.png"}
						alt={`Image ${i}`}
						className={`${styles.imageOther} img`}
						onClick={() => handleImageClick(src)}
						onMouseEnter={(e) => handleImageMouseEnter(e.currentTarget)}
						onMouseLeave={(e) => handleImageMouseLeave(e.currentTarget)}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectGallery;
