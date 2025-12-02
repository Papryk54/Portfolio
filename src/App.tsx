import { About } from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import gsap from "gsap";
import {
	Draggable,
	Flip,
	ScrollToPlugin,
	ScrollTrigger,
	SplitText,
} from "gsap/all";
import CustomScroll from "./utils/CustomScroll/CustomScroll";
import Contact from "./components/pages/Contact/Contact";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setLanguage } from "./redux/languageChanger/languageChanger.slice";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, SplitText, Flip);

function App() {
	const { i18n } = useTranslation();
	const dispatch = useDispatch();

	useEffect(() => {
		if (i18n.language === "en" || i18n.language === "pl") {
			dispatch(setLanguage(i18n.language));
		}
	}, [i18n.language, dispatch]);
	return (
		<>
			<CustomScroll />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects/:id" element={<ProjectPage />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
