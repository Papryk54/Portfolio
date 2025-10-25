import ContactForm from "../../features/ContactForm/ContactForm";
import NavBar from "../../layout/NavBar/NavBar";
import styles from "./ProjectPage.module.scss";
import arrowIcon from "../../../assets/icons/arrow-light.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import TechStack from "../../utils/TechStack/TechStack";

const ProjectPage = () => {
	const mainRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleGoToMainSection = () => {
		if (mainRef.current) {
			gsap.to(window, {
				duration: 1,
				scrollTo: { y: mainRef.current.offsetTop },
				ease: "power2.inOut",
			});
		}
	};

	useGSAP(() => {
		gsap.to(mainRef.current, {
			scrollTrigger: {
				trigger: mainRef.current,
				start: "top top",
				end: "bottom center",
				scrub: true,
				markers: true,
			},
			ease: "none",
		});
	});
	return (
		<div ref={wrapperRef} className={`${styles.wrapper} ${styles.scrollable}`}>
			<NavBar />
			<div ref={headerRef} className={styles.projectHeader}>
				<div className={styles.projectImage}></div>
				<p className={styles.projectTitle}>Project Name</p>
				<p className={styles.projectMotto}>Main idea of the project</p>
				<button className={styles.goDownButton} onClick={handleGoToMainSection}>
					<img src={arrowIcon} alt="V" />
					<img src={arrowIcon} alt="V" />
					<img src={arrowIcon} alt="V" />
				</button>
			</div>
			<div ref={mainRef} className={styles.mainSection}>
				<div className={styles.projectInfo}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
							saepe laborum eius molestiae fugiat inventore architecto? Rem
							explicabo, nihil atque quos beatae id repellendus commodi
							reiciendis fugiat voluptatibus soluta dolorem. Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Cupiditate blanditiis illo
							libero, nostrum enim numquam tenetur dolores cumque ad maxime
							aliquid doloribus, iusto odit deserunt laudantium pariatur quis
							qui reiciendis.
						</p>
					</div>
					<div className={styles.technologiesUsed}>
						<TechStack />
						<a className={styles.githubLink} href="#">
							<img src="#" alt="githubLogo" />
						</a>
					</div>
				</div>
				<div className={styles.projectGallery}>
					<h3 className={styles.imageTitle}>Image Title</h3>
					<img src="#" alt="Image" className={styles.imageMain} />
					<div className={styles.otherImages}>
						<img src="#" alt="Image" className={styles.imageOther} />
						<img src="#" alt="Image" className={styles.imageOther} />
						<img src="#" alt="Image" className={styles.imageOther} />
						<img src="#" alt="Image" className={styles.imageOther} />
						<img src="#" alt="Image" className={styles.imageOther} />
					</div>
				</div>
			</div>
			<div className={styles.seeAlsoSection}>
				<p>also see section</p>
			</div>
			<ContactForm />
		</div>
	);
};

export default ProjectPage;
