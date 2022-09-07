import useTranslation from "../../../customHooks/translations";
import './Skills.css';
export default function Skills() {
    const translation = useTranslation();
    return (
        <section className="skills">
            <h1>{translation.body.title}</h1>
        </section>
    );
}