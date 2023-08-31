import React, { useState } from "react";
import { Link } from "react-router-dom";

function CartDropdown({ cartItems, onRemove }) {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.cost,
    0
  );

  const [quantities, setQuantities] = useState(
    cartItems.map((item) => ({ id: item.id, quantity: item.quantity }))
  );

  const increaseQuantity = (id) => {
    const newQuantities = quantities.map((q) => {
      if (q.id === id) q.quantity += 1;
      return q;
    });
    setQuantities(newQuantities);

    const updatedCart = cartItems.map((item) => {
      const matchingQuantityObj = newQuantities.find((q) => q.id === item.id);
      if (matchingQuantityObj) {
        item.quantity = matchingQuantityObj.quantity;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const newQuantities = quantities.map((q) => {
      if (q.id === id && q.quantity > 1) q.quantity -= 1;
      return q;
    });
    setQuantities(newQuantities);

    const updatedCart = cartItems.map((item) => {
      const matchingQuantityObj = newQuantities.find((q) => q.id === item.id);
      if (matchingQuantityObj) {
        item.quantity = matchingQuantityObj.quantity;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-dropdown">
      <h3>Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <span>Your cart is empty</span>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.picture} alt={item.name} />
            <div className="item-details">
              <span className="name">{item.name}</span>
              <div className="cartManageProduct">
                <div className="quantity-control">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>
                    {quantities.find((q) => q.id === item.id)?.quantity || 1}
                  </span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <span className="price">x ${item.cost}</span>
                <button
                  onClick={() => {
                    onRemove(item.id);
                  }}
                >
                  <span>x</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="cart-footer">
        <div>{totalQuantity} product(s) in cart</div>
        <div>Total Price: ${totalPrice.toFixed(2)}</div>
        <Link to="/cart">Go to Cart</Link>
      </div>
    </div>
  );
}

export default CartDropdown;
