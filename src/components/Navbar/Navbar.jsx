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
      <nav className="hero w-full bg-nav-color sticky top-0 z-10 flex justify-between items-center p-4 font-times sm:justify-around">
        <img src={LogoEdy} className="logo w-28 h-12" alt="" />
        <button
          className="sm:hidden text-links-color focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <div
          className={`navbar-menu flex-row sm:flex ${open ? 'flex flex-col  absolute top-20 w-2/3 left-0 right-0 mx-auto bg-black bg-opacity-90 text-white'  : 'hidden'} sm:flex  items-center gap-1.5`}
        >
          <ul className="navbar-list flex flex-col sm:flex-row justify-center sm:justify-end gap-3.5 flex-grow text-lg font-semibold list-none items-center sm:items-baseline sm:flex-wrap">
            <li>
              <a
                className="nav-link no-underline text-links-color hover:text-hover-color transition duration-500"
                href="#About"
                onClick={() => setOpen(false)}
              >
                {translation.navbar.about}
              </a>
            </li>
            <li>
              <a
                className="nav-link no-underline text-links-color hover:text-hover-color transition duration-500"
                href="#Contact"
                onClick={() => setOpen(false)}
              >
                {translation.navbar.contact}
              </a>
            </li>
          </ul>
          <ul className="languages-list list-none flex flex-col sm:flex-row items-center text-links-color justify-center sm:justify-start gap-1.5 sm:mr-0 sm:p-0 border-y sm:border-none sm:border-t-0">
            {languageOptions.map((lang) => (
              <li
                key={lang.value}
                className={`${lang.value === language ? "active font-bold text-hover-color underline" : ""} language text-lg font-light cursor-pointer`}
                onClick={() => { changeLanguage(lang.value); setOpen(false); }}
              >
                {lang.label}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="button-navbar bg-button-navbar-bg border-none rounded-3xl mb-4 sm:mb-0 px-2.5 mt-0 text-links-color text-lg font-times font-semibold cursor-pointer outline-none hover:bg-button-bg-hover hover:text-text-links-hover transition duration-500"
            onClick={downloadCV}
          >
            {translation.navbar.myCv}
          </button>
        </div>
      </nav>
    </div>
  );
}
