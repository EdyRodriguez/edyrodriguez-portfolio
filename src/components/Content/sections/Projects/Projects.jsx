import useTranslation from "../../../customHooks/translations";
import edyDex from "../../../../assets/edydex.png";
import portfolio from "../../../../assets/portfolio.png";
import { FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export default function Projects() {
  const translation = useTranslation();

  return (
    <section className="projects flex flex-col items-center justify-center py-8 ">
      <h1 className="text-3xl mb-8 text-text-color ">{translation.projects.title}</h1>
      <div className="projects-container grid grid-cols-1 w-full sm:w-4/5  sm:grid-cols-2 gap-8">
        <div className="project-card relative">
          <img src={edyDex} alt="EdyDex" className="project-image rounded-md w-full h-auto max-h-96 object-cover" />
          <div className="card-overlay absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col items-center justify-center rounded-md transition-opacity duration-500">
            <h2 className="text-xl text-white mb-4">{translation.projects.firstProject.title}</h2>
            <p className="text-white mb-4 px-4">{translation.projects.firstProject.description}</p>
            <div className="card-technologies flex gap-4 mb-4">
              <h3 className="text-white">{translation.projects.technologies}</h3>
              <a href="https://react.dev/" className="social-links text-2xl text-white" target="_blank" rel="noreferrer">
                <FaReact />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="social-links text-2xl text-white" target="_blank" rel="noreferrer">
                <FaCss3Alt />
              </a>
            </div>
            <div className="card-buttons flex gap-4">
              <a href="https://pokedex-project-five.vercel.app" target="_blank" className="card-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                {translation.projects.buttons.live}
              </a>
              <a href="https://github.com/EdyRodriguez/pokedex_project" target="_blank" className="card-button-code bg-gray-700 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-gray-900 transition-colors duration-300">
                <FaGithub />
                {translation.projects.buttons.code}
              </a>
            </div>
          </div>
        </div>
        <div className="project-card relative">
          <img src={portfolio} alt="Portfolio" className="project-image rounded-md w-full h-auto max-h-96 object-cover" />
          <div className="card-overlay absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex flex-col items-center justify-center rounded-md transition-opacity duration-500">
            <h2 className="text-xl text-white mb-4">{translation.projects.secondProject.title}</h2>
            <p className="text-white mb-4 px-4">{translation.projects.secondProject.description}</p>
            <div className="card-technologies flex gap-4 mb-4">
              <h3 className="text-white">{translation.projects.technologies}</h3>
              <a href="https://react.dev/" className="social-links text-2xl text-white" target="_blank" rel="noreferrer">
                <FaReact />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className="social-links text-2xl text-white" target="_blank" rel="noreferrer">
                <FaCss3Alt />
              </a>
              <a href="https://www.typescriptlang.org/" className="social-links text-2xl text-white" target="_blank" rel="noreferrer">
                <SiTypescript />
              </a>
            </div>
            <div className="card-buttons flex gap-4">
              <a href="https://edyrodriguez.dev/" target="_blank" className="card-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                {translation.projects.buttons.live}
              </a>
              <a href="https://github.com/EdyRodriguez/edyrodriguez-portfolio" target="_blank" className="card-button-code bg-gray-700 text-white py-2 px-4 rounded-md flex items-center gap-2 hover:bg-gray-900 transition-colors duration-300">
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
