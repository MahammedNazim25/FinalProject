import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, onValue } from "firebase/database";
import { database } from './Firebase';
import './Auth.css'; // Assuming this styles the overall layout
import './Menu.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Menu = () => {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const Itemsrf = ref(database, "Menu");
    onValue(Itemsrf, (snapshot) => {
      if (snapshot.exists()) {
        const items = snapshot.val();
        setMenuItems(items);
        const initialQuantities = Object.keys(items).reduce((acc, key) => ({
          ...acc, [key]: 0
        }), {});
        setQuantities(initialQuantities);
      } else {
        setMenuItems({});
      }
    });
  }, []);

  const handleQuantityChange = (itemKey, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemKey]: newQuantity
    }));
  };

  const addToCart = (itemKey) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.key === itemKey);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantities[itemKey];
        return updatedCart;
      } else {
        return [...prevCart, { key: itemKey, item: menuItems[itemKey], quantity: quantities[itemKey] }];
      }
    });
    setQuantities(prevQuantities => ({ ...prevQuantities, [itemKey]: 0 })); // reset input field to 0
  };

  return (
    <div className="menu">
      <h1>Our Delicious Menu</h1>
      <Navbar/>
      <div className="menu-items">
        {Object.keys(menuItems).map((key) => {
          const menuItem = menuItems[key];
          return (
            <div key={key} className="menu-item">
              <h3>{menuItem.name}</h3>
              <img src={menuItem.image} alt={menuItem.name} />
              <p>{menuItem.description}</p>
              <p>Price: ${menuItem.price}</p>
              <input
                type="number"
                min="0"
                value={quantities[key]}
                onChange={(e) => handleQuantityChange(key, parseInt(e.target.value) || 0)}
              />
              <button className='add_btn' onClick={() => addToCart(key)}>
                Add Item
              </button>
            </div>
          );
        })}
      
      </div>
      <button className="view-order-btn" onClick={() => navigate('/Vieworder', { state: { cart } })}>
        View Order
      </button>
      <Footer/>
    </div>
  );
};

export default Menu;
