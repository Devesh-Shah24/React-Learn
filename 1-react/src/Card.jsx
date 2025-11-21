import React from "react";
import { motion } from "framer-motion";

const Card = ({
  badge,
  image,
  category,
  title,
  desc,
  features,
  oldPrice,
  newPrice,
  reviews,
  stock,
}) => {
  return (
    <motion.div
      className="card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 12 }}
    >
      {badge && <div className="badge">{badge}</div>}

      <div className="img">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="info">
        <div className="cat">{category}</div>
        <h2 className="title">{title}</h2>

        <p className="desc">{desc}</p>

        <div className="feats">
          {features.map((f, i) => (
            <span key={i} className="feat">
              {f}
            </span>
          ))}
        </div>

        <div className="bottom">
          <div className="price">
            <span className="old">${oldPrice}</span>
            <span className="new">${newPrice}</span>
          </div>

          <button className="btn">
            <span>Add to Cart</span>

            <svg
              className="icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        <div className="meta">
          <div className="rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#FFD700"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 
                  17 14.14 18.18 21.02 12 17.77 
                  5.82 21.02 7 14.14 2 9.27 8.91 
                  8.26 12 2" />
              </svg>
            ))}
            <span className="rcount">{reviews} Reviews</span>
          </div>

          <div className="stock">{stock}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
