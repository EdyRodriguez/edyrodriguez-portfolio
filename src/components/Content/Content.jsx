import './Content.css';
import useTranslation from "../customHooks/translations";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Socials from "./Socials/Socials";
import Contact from "./sections/Contact/Contact";
import Footer from './sections/Footer/Footer';

export default function Content() {
    const translation = useTranslation();
    return (
        <div className="Content">
            <About />
            <Skills />
            <Projects />
            <Socials/>
            <Contact/>
            <Footer/>
        </div>
    );
}