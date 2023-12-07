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

                className="social-links"
                target="_blank"
                rel="noreferrer">
                {skill.icon}
              </a>
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
