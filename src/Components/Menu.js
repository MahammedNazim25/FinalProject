import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from './MenuContext';
import './Auth.css'; // Assuming this styles the overall layout
import './Menu.css';

const Menu = () => {
  const { menuItems } = useContext(MenuContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
  );

  const handleQuantityChange = (item, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.name]: newQuantity
    }));
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.item.name === item.name);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantities[item.name];
        return updatedCart;
      } else {
        return [...prevCart, { item, quantity: quantities[item.name] }];
      }
    });
    setQuantities(prevQuantities => ({ ...prevQuantities, [item.name]: 0 })); // reset input field to 0
  };

  return (
    <div className="menu">
      <h1>Our Delicious Menu</h1>
      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="menu-item">
            <h3>{menuItem.name}</h3>
            <img src={menuItem.image} alt={menuItem.name} />
            <p>{menuItem.description}</p>
            <p>Price: ${menuItem.price}</p>
            <input
              type="number"
              min="0"
              value={quantities[menuItem.name]}
              onChange={(e) => handleQuantityChange(menuItem, parseInt(e.target.value) || 0)}
            />
            <button onClick={() => addToCart(menuItem)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className="view-order-btn" onClick={() => navigate('/Vieworder', { state: { cart } })}>
        View Order
      </button>
    </div>
  );
};

export default Menu;
