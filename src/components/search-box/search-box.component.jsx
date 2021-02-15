import React from "react";
import "./search-box.styles.css";

// below is a functional component ... different from Class component and cannot access state or life cycle methods
// functional component is good for just rendering some html. easier to read, easier to render
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
