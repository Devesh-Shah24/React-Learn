import React from "react";

const Filters = ({ filter, setFilter, categories }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="filter"
      aria-label="Filter by category"
    >
      <option value="">All Categories</option>
      {categories.map((c, i) => (
        <option key={i} value={c}>{c}</option>
      ))}
    </select>
  );
};

export default Filters;
