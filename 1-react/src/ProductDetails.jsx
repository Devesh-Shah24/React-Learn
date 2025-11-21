import { useParams, useNavigate } from "react-router-dom";
import products from "./data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const idx = Number(id);
  const product = products[idx];

  if (!product) return <h2 style={{textAlign:'center'}}>Product Not Found</h2>;

  return (
    <div className="details">
      <div>
        <img src={product.image} className="details-img" alt={product.title} loading="lazy" />
      </div>

      <div>
        <h1>{product.title}</h1>
        <p className="desc">{product.desc}</p>

        <h3>Features:</h3>
        <ul>
          {product.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <h2>${product.newPrice}</h2>
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          <button className="btn">Add to Cart</button>
          <button className="btn" onClick={() => navigate(-1)}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
