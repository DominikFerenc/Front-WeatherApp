import React from "react";

import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="main-container">
      <div className="search-box">
        <input
          type="text"
          name=""
          className="search-txt"
          placeholder="city, zip code.."
        />
        <a className="search-btn">
        <i className="fas fa-search"></i>        </a>
      </div>
    </div>
  );
};
