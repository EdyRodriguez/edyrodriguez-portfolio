import './Body.css';
import useTranslation from "../customHooks/translations";

export default function Body() {
    const translation = useTranslation();
    return (
        <div className="Body">
            <section className="about">
                <h1>{translation.body.title}</h1>
            </section>
            <section className="projects">
            </section>
        </div>
    );
}