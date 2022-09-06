import "./Navbar.css";
import LogoEdy from "../../assets/LogoEdy.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="hero">
        <div className="navbar-menu">
        <img src={LogoEdy} className="logo" alt="" />
          <ul className="navbar-list">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
            </li>
          </ul>
          <button type="button">My CV</button>
        </div>
      </nav>
    </div>
  );
}
