import React from "react";
import "../styles/Product.css"; // Assuming the CSS file is named styles.css and is in the same directory.

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.picture} alt={product.name} />
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-category">{product.category}</div>
        <div className="product-price">${product.cost}</div>
      </div>
    </div>
  );
};

export default ProductCard;
