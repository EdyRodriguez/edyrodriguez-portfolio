import "./Navbar.css";
import { useState } from "react";
import { useLanguageContext } from "../contexts/LanguageContext";
import useTranslation from "../customHooks/translations";
import LogoEdy from "../../assets/LogoEdy.png";
import CV from "../../assets/CV Edgar Rodriguez [Eng].pdf";


export default function Navbar() {
  const { language, changeLanguage } = useLanguageContext();
  const [open, setOpen] = useState(false);
  const translation = useTranslation();
  const downloadCV = () => {
    window.open(CV);
  };
  
  const languageOptions = [
    { value: "en", label: "En" },
    { value: "es", label: "Es" },
    { value: "fr", label: "Fr" },
  ];

  return (
    <div className="Navbar">
      <nav className="hero">
        <div className="navbar-menu">
          <img src={LogoEdy} className="logo" alt="" />
          <ul className="navbar-list">
            <li>
              <a className="nav-link" href="#About">{translation.navbar.about}</a>
            </li>
            <li>
              <a className="nav-link" href="#Contact">{translation.navbar.contact}</a>
            </li>
            <li></li>
          </ul>
          <ul className="languages-list" onClick={() => setOpen(!open)}>
            {languageOptions.map((lang) => (
              <li
                key={lang.value}
                className={lang.value === language ? "active language" : "language"}
                onClick={() => changeLanguage(lang.value)}
              >
                {lang.label}
              </li>
            ))}
          </ul>
          <button type="button" className="button" onClick={downloadCV}>
            {translation.navbar.myCv}
          </button>
        </div>
      </nav>
    </div>
  );
}
