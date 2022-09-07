import './Content.css';
import useTranslation from "../customHooks/translations";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Socials from "./Socials/Socials";

export default function Content() {
    const translation = useTranslation();
    return (
        <div className="Content">
            <About />
            <Skills />
            <Projects />
            <Socials/>
        </div>
    );
}