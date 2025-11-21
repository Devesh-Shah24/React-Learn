import { useEffect, useState, useContext } from "react";
import products from "../data/products.js";
import Card from "../Card.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Filters from "../components/Filters.jsx";
import SortMenu from "../components/SortMenu.jsx";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Home = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => { const t = setTimeout(() => setLoading(false), 500); return () => clearTimeout(t); }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  let filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filter) filtered = filtered.filter((p) => p.category === filter);

  if (sort === "low") filtered = [...filtered].sort((a, b) => a.newPrice - b.newPrice);
  if (sort === "high") filtered = [...filtered].sort((a, b) => b.newPrice - a.newPrice);
  if (sort === "reviews") filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);

  if (loading) return <div className="loader"></div>;

  return (
    <>
      <button
        className="btn"
        onClick={() => setDark(!dark)}
        style={{ marginBottom: "20px" }}
      >
        {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="controls">
        <SearchBar value={search} setValue={setSearch} />
        <Filters filter={filter} setFilter={setFilter} categories={categories} />
        <SortMenu sort={sort} setSort={setSort} />
      </div>

      <div className="container">
        {filtered.map((item, i) => (
          <Card key={i} {...item} id={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
