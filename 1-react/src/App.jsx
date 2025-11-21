import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";
import products from "./data/products";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Dynamic Product Cards</h1>

      <div className="container">
        {products.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
