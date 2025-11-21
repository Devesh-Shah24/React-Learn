import React from "react";

const SearchBar = ({ value, setValue }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="search"
      aria-label="Search products"
    />
  );
};

export default SearchBar;
