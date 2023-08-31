import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
function Header() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    // Listen for changes in localStorage
    const updateCartItems = () => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCartItems);
    };

    // Initial load
    updateCartItems();

    // Add event listener for localStorage changes
    window.addEventListener("storage", updateCartItems);

    // Clean up the listener on component unmount
    return () => window.removeEventListener("storage", updateCartItems);
  }, []);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo Furniro" className="logoImg" />
        <h1 className="logoText">Furniro</h1>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="rightLinks">
        <li>
          <i className="fa-regular fa-user"></i>
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
        <li>
          <i className="fa-regular fa-heart"></i>
        </li>
        <li>
          <div className="cart-container">
            <i className="fa-solid fa-cart-shopping"></i>
            <CartDropdown
              cartItems={cartItems}
              onRemove={handleRemoveFromCart}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
