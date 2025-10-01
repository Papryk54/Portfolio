import BgcBlur from "../../layout/BgcBlur/BgcBlur";
import NavBar from "../../layout/NavBar/NavBar";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div className={styles.wrapper}>
			<BgcBlur />
			<NavBar />
		</div>
	);
}; 

export default Home;
