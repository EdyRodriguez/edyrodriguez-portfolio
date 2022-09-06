import "./Navbar.css";
import { useState } from "react";
import { useLanguageContext } from "../contexts/LanguageContext";
import useTranslation from "../customHooks/translations";
import LogoEdy from "../../assets/LogoEdy.png";
import CV from "../../assets/CV Edgar Rodriguez [Eng].pdf";

const useHovering = () => {
  const [hovering, setHovering] = useState(false);
  const onMouseOver = () => setHovering(true);
  const onMouseOut = () => setHovering(false);
  return [hovering, onMouseOver, onMouseOut];
};

export default function Navbar() {
  const [hovering, onMouseOver, onMouseOut] = useHovering();
  const { language, changeLanguage } = useLanguageContext();
  const translation = useTranslation();
  const downloadCV = () => {
    window.open(CV);
  };
  const handleMouseOver = () => {
    console.log("Mouse over");
    onMouseOver();
  };
  const handleMouseOut = () => {
    console.log("Mouse out");
    onMouseOut();
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
  ];

  return (
    <div className="Navbar">
      <nav className="hero">
        <div className="navbar-menu">
          <img src={LogoEdy} className="logo" alt="" />
          <ul className="navbar-list">
            <li>
              <a href="#">{translation.navbar.home}</a>
            </li>
            <li>
              <a href="#">{translation.navbar.about}</a>
            </li>
            <li>
              <a href="#">{translation.navbar.contact}</a>
            </li>
            <li></li>
          </ul>
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-selector"
          >
            {languageOptions.map((language) => (
              <option
                key={language.value}
                value={language.value}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className={hovering ? "languages" : ""}
              >
                {language.label}
              </option>
            ))}
          </select>
          <button type="button" onClick={downloadCV}>
            {translation.navbar.myCv}
          </button>
        </div>
      </nav>
    </div>
  );
}
