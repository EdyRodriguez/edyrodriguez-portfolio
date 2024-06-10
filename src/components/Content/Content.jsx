import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Socials from "./Socials/Socials";
import Contact from "./sections/Contact/Contact";

export default function Content() {
    return (
        <div className="Content p-0 m-auto w-[80%] text-color">
            <About />
            <Skills />
            <Projects />
            <Socials/>
            <Contact/>
        </div>
    );
}