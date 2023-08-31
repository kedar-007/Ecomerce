import React, { useState } from "react";

function CounterWithCart({ product }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
    } else {
      cart = [];
    }

    // Check if product is already in cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += count;
    } else {
      product.quantity = count;
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Added ${count} items of ${product.name} to the cart!`);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          border: "solid 1px #9F9F9F",
          borderRadius: "10px",
        }}
      >
        <button
          style={{
            fontSize: "30px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
          }}
          onClick={handleDecrement}
        >
          -
        </button>
        <div
          style={{
            fontSize: "22px",
            margin: "0 10px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
          }}
        >
          {count}
        </div>
        <button
          style={{
            fontSize: "25px",
            fontWeight: 500,
            border: "none",
            backgroundColor: "transparent",
            padding: "12px",
          }}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <button
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "solid 1px black",
          borderRadius: "10px",
          fontSize: "24px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "14px",
          paddingBottom: "14px",
          marginLeft: "2vw",
        }}
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default CounterWithCart;
