import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EmptyImage from "../assets/NoResult.png";
import Logo from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const EmptyState = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      navigate(`/search-results?query=${e.target.value.trim()}`);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="empty-state-page">
      <div className="search-result-navbar">
        <div className="logo">
          <img className="navbar-logo" src={Logo} alt="Girman Logo" />
        </div>

        <div className="searchbox-container">
          <input
            className="navbar-searchbox"
            type="text"
            placeholder="Search"
            defaultValue={query || ""}
            onKeyDown={handleSearch}
          />
          <button onClick={() => navigate("/")} className="back">
            Back
          </button>

          <FiMenu className="menu-icon" onClick={toggleMenu} />
        </div>

        {menuOpen && (
          <div ref={dropdownRef} className="dropdown">
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
      </div>

      <div className="empty-state-content">
        <img className="empty-image" src={EmptyImage} alt="No results found" />
      </div>
    </div>
  );
};

export default EmptyState;
