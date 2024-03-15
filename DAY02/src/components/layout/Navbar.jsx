import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/Header.css";

function Navbar() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">AGRI-LOAN</div>
          <div
            className={`nav-icon ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/explore"
                className={`nav-links ${
                  location.pathname === "/explore" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                LOANS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/journal"
                className={`nav-links ${
                  location.pathname === "/journal" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                INTEREST
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-links ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={`nav-links ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className={`nav-links ${
                  location.pathname === "/register" ? "active" : ""
                }`}
                onClick={handleClick}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
