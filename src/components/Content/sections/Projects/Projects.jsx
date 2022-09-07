import useTranslation from "../../../customHooks/translations";
import './Projects.css';
export default function projects() {
    const translation = useTranslation();
    return (
        <section className="projects">
            <h1>{translation.body.title}</h1>
        </section>
    );
}