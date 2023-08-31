import React from "react";
import "../styles/Product.css"; // Assuming the CSS file is named styles.css and is in the same directory.
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <img src={product.picture} alt={product.name} />
        <div className="product-info">
          <div className="product-name">{product.name}</div>
          <div className="product-category">{product.category}</div>
          <div className="product-price">${product.cost}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
