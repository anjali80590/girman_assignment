

















import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EmptyImage from "../assets/NoResult.png"; // Path to "No results" image
import Logo from "../assets/logo.png"; // Path to your logo
import { FiMenu } from "react-icons/fi"; // Menu icon for mobile

const EmptyState = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query"); // Extract query from URL
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile dropdown menu
  const dropdownRef = useRef(null); // Ref for dropdown menu

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false); // Close dropdown
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      navigate(`/search-results?query=${e.target.value.trim()}`); // Navigate to search-results with the new query
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="empty-state-page">
      {/* Navbar with logo and search box */}
      <div className="search-result-navbar">
        <div className="logo">
          <img className="navbar-logo" src={Logo} alt="Girman Logo" />
        </div>

        <div className="searchbox-container">
          <input
            className="navbar-searchbox"
            type="text"
            placeholder="Search"
            defaultValue={query || ""} // Show the query in the search bar
            onKeyDown={handleSearch}
          />
          <button onClick={() => navigate("/")} className="back">
            Back
          </button>

          {/* Mobile Menu Icon */}
          <FiMenu className="menu-icon" onClick={toggleMenu} />
        </div>

        {/* Mobile Dropdown Menu */}
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

      {/* Empty State Content */}
      <div className="empty-state-content">
        <img className="empty-image" src={EmptyImage} alt="No results found" />
      </div>
    </div>
  );
};

export default EmptyState;
