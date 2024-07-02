import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function ViewOrder() {
  const location = useLocation();
  const { cart } = location.state;

  return (
    <div className="view-order">
      <Navbar />

      <h1>Your Order</h1>

      <div className="order-items">
        {cart.length > 0 ? (
          cart.map((cartItem, index) => (
            <div key={index} className="order-item">
              <h3>{cartItem.item.name}</h3>
              <p>Quantity: {cartItem.quantity}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ViewOrder;
