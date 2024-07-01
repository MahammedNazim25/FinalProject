import { useState , React } from "react"; // React from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css';
import Menu from "./Menu";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const ViewOrder =() => {
//   return (
//     <div className="about-us">
//       <Navbar />
//       <h2 className="abt">This is our ViewOrder page</h2>
//       <p className="abt">
//         order data <br/>
//         Notification <br/>
//         fgdr<br/>
//         gfhfgh
//       </p>
//       <Footer/>
//     </div>
//   );
// }

// export default ViewOrder;

function ViewOrder({ cart, updateCart, removeFromCart }) {
  const [quantity, setQuantity] = useState(1); // For editing quantity

  const handleQuantityChange = (event, item) => {
    const newQuantity = parseInt(event.target.value);
    if (newQuantity > 0) {
      updateCart(item, newQuantity); // Update cart with new quantity for the item
      setQuantity(newQuantity); // Update local quantity state
    }
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item); // Remove item from cart
  };

  return (
    <div className="view-order">
      <h1>Your Order</h1>
      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.item} x
              <input
                type="number"
                min="1"
                value={quantity} // Use local quantity state for editing
                onChange={(event) => handleQuantityChange(event, item)}
              />
              <button onClick={() => handleRemoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* Add buttons or functionality for checkout, editing quantities, etc. */}
      <button disabled={cart.length === 0}>Checkout</button> {/* Disable if cart is empty */}
    </div>
  );
}

export default ViewOrder;
