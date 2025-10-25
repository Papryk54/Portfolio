import { About } from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import gsap from "gsap";
import { Draggable, ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/projects/:id" element={<ProjectPage />} />
		</Routes>
	);
}

export default App;
