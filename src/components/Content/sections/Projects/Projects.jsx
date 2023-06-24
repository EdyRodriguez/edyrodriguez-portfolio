import useTranslation from "../../../customHooks/translations";
import "./Projects.css";
import edyDex from "../../../../assets/edyDex.png";
import portfolio from "../../../../assets/portfolio.png";

import { FaCss3Alt } from "react-icons/fa";
import { FaReact} from "react-icons/fa";
import {SiTypescript} from "react-icons/si";
import {FaGithub} from 'react-icons/fa';
export default function projects() {
  const translation = useTranslation();
  return (
    <section className="projects">
      <h1>{translation.projects.title}</h1>
      <div className="projects-container">
        <div className="project-card">
          <img src={edyDex} alt="EdyDex" className="project-image" />
          <div className="card-overlay">
            <h2>{translation.projects.firstProject.title}</h2>
            <p>{translation.projects.firstProject.description}</p>

            <div className="card-technologies">
                <h3>{translation.projects.technologies}</h3>
              <a
                href="https://react.dev/"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                <FaReact />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                <FaCss3Alt />
              </a>
            </div>
            <div className="card-buttons">
                <a href="https://pokedex-project-five.vercel.app/pokemon/1"  target="_blank" className="card-button">{translation.projects.buttons.live}</a>
                <a href="https://github.com/EdyRodriguez/pokedex_project"  target="_blank" className="card-button card-button-code">
                   <FaGithub />
                   {translation.projects.buttons.code}

                </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={portfolio} alt="Portfolio" className="project-image" />
          <div className="card-overlay">
            <h2>{translation.projects.secondProject.title}</h2>
            <p>{translation.projects.secondProject.description}</p>
            <div className="card-technologies">
                <h3>{translation.projects.technologies}</h3>
              <a
                href="https://react.dev/"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                <FaReact />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                <FaCss3Alt />
              </a>
              <a
                href="https://github.com/https://www.typescriptlang.org/"
                className="social-links"
                target="_blank"
                rel="noreferrer">
                <SiTypescript />
              </a>
            </div>
            <div className="card-buttons">
                <a href="https://edyrodriguez.dev/"  target="_blank" className="card-button">{translation.projects.buttons.live}</a>
                <a href="https://github.com/EdyRodriguez/edyrodriguez-portfolio"  target="_blank" className="card-button card-button-code">
                   <FaGithub />
                   {translation.projects.buttons.code}

                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
