import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import products from "./data/products.js";

function App() {
  const [loading, setLoading] = useState(true);

  // Loader delay (smooth UI)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Dynamic Product Cards</h1>

      <div className="container">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
