import useTranslation from "../../../customHooks/translations";
import "./Skills.css";
import skillsInfo from "./Skills-info";
export default function Skills() {
  const translation = useTranslation();
  return (
    <section className="skills">
      <h1>{translation.skills.title}</h1>
      <div className="skill-container">
        <ul className="skill-list">
          {skillsInfo.map((skill) => (
            <li key={skill.id} className="skill">
              <a
                href="https://www.linkedin.com/in/edgar-fernando-rodriguez-rangel-261824160/"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                {skill.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
