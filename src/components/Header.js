import React from "react";
import "../styles/Header.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function Header() {
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
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
