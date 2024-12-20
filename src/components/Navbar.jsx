import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import bigLogo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={bigLogo} alt="Girman Logo" />
      </div>

      <div className="links">
        <a href="/" className={location.pathname === "/" ? "active-link" : ""}>
          Search
        </a>
        <a
          href="https://girmantech.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
        <a
          href="https://www.linkedin.com/company/girmantech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@girmantech.com">Contact</a>
      </div>

      <FiMenu className="menu-icon" onClick={toggleMenu} />

      {menuOpen && (
        <div className="dropdown">
          <a
            href="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Search
          </a>
          <a
            href="https://girmantech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:contact@girmantech.com">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
