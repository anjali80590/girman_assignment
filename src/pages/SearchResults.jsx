import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import Logo from "../assets/logo.png";
import userData from "../data/users.json";
import { FiMenu } from "react-icons/fi";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const query = new URLSearchParams(useLocation().search).get("query");
  const navigate = useNavigate();

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

  useEffect(() => {
    if (!query) {
      setResults([]);
      navigate("/no-result?query=");
      return;
    }

    const queryLower = query.trim().toLowerCase();

    const filteredResults = userData.filter((user) => {
      return (
        (user.first_name && user.first_name.toLowerCase() === queryLower) ||
        (user.last_name && user.last_name.toLowerCase() === queryLower) ||
        (user.city && user.city.toLowerCase() === queryLower) ||
        (user.contact_number && user.contact_number === queryLower)
      );
    });

    if (filteredResults.length === 0) {
      navigate(`/no-result?query=${query}`);
    } else {
      setResults(filteredResults);
    }
  }, [query, navigate]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="search-results-page">
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

      <div className="search-container-mobile">
        <input
          className="navbar-searchbox"
          type="text"
          placeholder="Search"
          defaultValue={query || ""}
        />
      </div>

      <div className="results-container">
        {results.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
