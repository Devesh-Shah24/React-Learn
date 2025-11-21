import React from "react";

const SortMenu = ({ sort, setSort }) => {
  return (
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="filter"
      aria-label="Sort products"
    >
      <option value="">Sort</option>
      <option value="low">Price: Low → High</option>
      <option value="high">Price: High → Low</option>
      <option value="reviews">Highest Reviewed</option>
    </select>
  );
};

export default SortMenu;
