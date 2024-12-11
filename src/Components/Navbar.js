import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "./button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Philosophy Project
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fa-solid fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/examples"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Examples
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/phil-ideas"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Philosophical Ideas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ai-detector"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                AI Detector
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">HOME</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
