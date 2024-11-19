import React from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import Logo from "../assets/Biglogo.png"; 
import girman from "../assets/girman.png";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="search-container">
        <div className="logo-title">
          <img src={Logo} alt="Girman Logo" />
          <img src={girman} alt="Girman Logo" />
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default Home;
