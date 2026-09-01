import styles from "./ProjectGallery.module.scss";
import githubIcon from "../../../assets/icons/socials/github-mark-white.png";
import { useSelector } from "react-redux";
import { selectProject } from "../../../redux/projectReducer/projectReducer.selectors";
import { getImageByName } from "../../../utils/images";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import websiteIcon from "../../../assets/icons/website.png";

const ProjectGallery = () => {
	const params = useParams<{ id: string }>();
	const activeProject = useSelector(selectProject).list.find(
		(project) => project.id === Number(params.id),
	);
	const images = activeProject?.images || [];
	const imagesSrcs = images.map(getImageByName);
	const [mainImgSrc, setMainImgSrc] = useState(
		imagesSrcs[0] || "placeholder.png",
	);

	const imgContainerRef = useRef<HTMLImageElement>(null);
	const imgMainRef = useRef<HTMLImageElement>(null);
	const normalSizeContainerRef = useRef<HTMLDivElement>(null);
	const fullSizeContainerRef = useRef<HTMLDivElement>(null);
	const fullSizeButtonRef = useRef<HTMLButtonElement>(null);
	const [isFullSize, setIsFullSize] = useState(false);
	const { t } = useTranslation();

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
				duration: 0.5,
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

	const handleChangeImg = (direction: "next" | "prev") => {
		const currentIndex = imagesSrcs.indexOf(mainImgSrc);
		let newIndex = currentIndex;

		if (direction === "next") {
			newIndex = (currentIndex + 1) % imagesSrcs.length;
		} else if (direction === "prev") {
			newIndex = (currentIndex - 1 + imagesSrcs.length) % imagesSrcs.length;
		}

		const img = imgMainRef.current;
		if (!img) return;

		const hideTo = direction === "next" ? -300 : 300;
		const showFrom = direction === "next" ? 300 : -300;

		gsap.to(img, {
			x: hideTo,
			opacity: 0,
			duration: 0.4,
			ease: "power2.in",
			onComplete: () => {
				setMainImgSrc(imagesSrcs[newIndex]);
				gsap.fromTo(
					img,
					{ x: showFrom, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
				);
			},
		});
	};

	return (
		<section className={styles.projectGallery}>
			<div className={styles.galleryHeader}>
				<h3 className={styles.imageTitle}>
					{activeProject ? t(activeProject.name) : ""}
				</h3>
				<a
					className={styles.githubLink}
					href={activeProject?.githubLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={githubIcon} alt="githubLogo" />
				</a>
				{activeProject?.websiteLink && (
					<a
						className={styles.websiteLink}
						href={activeProject?.websiteLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={websiteIcon} alt="websiteLogo" />
					</a>
				)}
			</div>
			{isFullSize && (
				<div className={styles.fullSizeMode}>
					<button
						onClick={handleFullSize}
						ref={fullSizeButtonRef}
						className={styles.closeFullScreen}
					></button>
					<button
						onClick={() => handleChangeImg("next")}
						className={styles.nextImg}
					></button>
					<button
						onClick={() => handleChangeImg("prev")}
						className={styles.prevImg}
					></button>
				</div>
			)}
			<div
				className={`${styles.fullSizeImgContainer} ${
					isFullSize ? "" : styles.hidden
				}`}
				ref={fullSizeContainerRef}
			></div>
			<div className={styles.mainImageContainer} ref={normalSizeContainerRef}>
				<button className={styles.imageHoverText} onClick={handleFullSize}>
					{t("clickToEnlarge")}
				</button>
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
		</section>
	);
};

export default ProjectGallery;
