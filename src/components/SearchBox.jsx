



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import search from '../assets/search.png'
const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search-results?query=${query}`);
    }
  };

  return (
    <div className="search-container">
      <div className="input-wrapper">
        {/* <FiSearch className="search-icon" /> Icon before the input */}
        <img src={search} className="search-icon"/>
        <input
          type="text"
          className="search-box"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
