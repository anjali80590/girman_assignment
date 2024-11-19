



// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import UserCard from "../components/UserCard";
// import Logo from "../assets/logo.png"; // Path to your logo
// import userData from "../data/users.json";

// const SearchResults = () => {
//   const [results, setResults] = useState([]);
//   const query = new URLSearchParams(useLocation().search).get("query");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!query) {
//       setResults([]);
//       navigate("/no-result?query="); // Navigate with an empty query
//       return;
//     }

//     const queryLower = query.trim().toLowerCase();

// const filteredResults = userData.filter((user) => {
//   return (
//     (user.first_name && user.first_name.toLowerCase() === queryLower) ||
//     (user.last_name && user.last_name.toLowerCase() === queryLower) ||
//     (user.city && user.city.toLowerCase() === queryLower) ||
//     (user.contact_number && user.contact_number === queryLower)
//   );
// });

//     if (filteredResults.length === 0) {
//       navigate(`/no-result?query=${query}`); // Redirect to /no-result with the query
//     } else {
//       setResults(filteredResults);
//     }
//   }, [query, navigate]);

//   return (
//     <div className="search-results-page">
//       {/* Navbar with logo */}
//       <div className="search-result-navbar">
//         <img className="navbar-logo" src={Logo} alt="Girman Logo" />
//         <div>
//           <input
//             className="navbar-searchbox"
//             type="text"
//             placeholder="Search"
//             defaultValue={query || ""}
//           />
//           <button onClick={()=>navigate('/')} className="back">Back</button>
//         </div>
//       </div>

//       {/* Mobile search box (shown only on small screens) */}
//       <div className="search-container-mobile">
//         <input
//           className="navbar-searchbox"
//           type="text"
//           placeholder="Search"
//           defaultValue={query || ""}
//         />
//       </div>

//       {/* Results Container */}
//       <div className="results-container">
//         {results.map((user, index) => (
//           <UserCard key={index} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchResults;














import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";
import Logo from "../assets/logo.png"; // Path to your logo
import userData from "../data/users.json";
import { FiMenu } from "react-icons/fi"; // Menu icon for mobile

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile dropdown menu
  const dropdownRef = useRef(null); // Ref for dropdown menu
  const query = new URLSearchParams(useLocation().search).get("query");
  const navigate = useNavigate();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter users based on the query
  useEffect(() => {
    if (!query) {
      setResults([]);
      navigate("/no-result?query="); // Navigate with an empty query
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
      navigate(`/no-result?query=${query}`); // Redirect to /no-result with the query
    } else {
      setResults(filteredResults);
    }
  }, [query, navigate]);

  // Toggle the mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="search-results-page">
      {/* Navbar with logo */}
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

      {/* Mobile search box (shown only on small screens) */}
      <div className="search-container-mobile">
        <input
          className="navbar-searchbox"
          type="text"
          placeholder="Search"
          defaultValue={query || ""}
        />
      </div>

      {/* Results Container */}
      <div className="results-container">
        {results.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
