import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser } from "../../components/redux/UserSlice";
import "../../assets/css/Header.css";
import icon from "../../assets/images/icon.jpg";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [click, setClick] = useState(false);
  const [drop, setDrop] = useState(false);
  const handleDrop = () => setDrop(!drop);
  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={icon} />
          </div>
          <div className="nav-name">FARMFUNDS</div>
          <div
            className={`nav-icon ${click ? "active" : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/loan" className="nav-links">
                Loan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              {user.user && user.user.username ? (
                <>
                  <span className="nav-links" onClick={handleDrop}>
                    Farmer
                  </span>
                  <ul
                    className={drop ? "dropdown-menu active" : "dropdown-menu"} >
                    <li>
                      <Link to="/profile" className="nav-links" onClick={handleDrop}>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" className="nav-links" onClick={handleDrop}>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="/trackloans" className="nav-links" onClick={handleDrop}>
                        Track Loans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="nav-links"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <Link to="/sign" className="nav-links">
                  SignIn/SignUp
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
