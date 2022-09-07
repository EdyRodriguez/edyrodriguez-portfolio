import './Content.css';
import useTranslation from "../customHooks/translations";
import About from "./sections/About/About";
import Projects from "./sections/Project.jsx/Projects";
import Skills from "./sections/Skills/Skills";

export default function Content() {
    const translation = useTranslation();
    return (
        <div className="Content">
            <About />
            <Skills />
            <Projects />
        </div>
    );
}