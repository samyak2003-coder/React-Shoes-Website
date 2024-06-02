// Cart.js
import React from "react";
import Nav2 from "./Navigation/Nav2";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <>
      <Nav2 />
      <div className="cart-container">
        <h2>Cart</h2>
      <div>
    
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-image"/>
              <p>{item.title}</p>
              <p>${item.newPrice}</p>
            </div>
          ))}
        </div>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Quantity: {cartItems.length}</p>
      </div>
    </>
  );
};

export default Cart;
