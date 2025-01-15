import React from "react";
import '../../App.css';

export function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find lab tests, diagnostics centres"
        className="search-input"
      />
      <button className="search-button">
        <img
          src="/assets/icons/search.svg"
          alt="Search"
          className="search-icon"
        />
      </button>
    </div>
  );
}
