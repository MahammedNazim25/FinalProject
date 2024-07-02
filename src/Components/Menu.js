import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css'; // Assuming this styles the overall layout
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Menu.css";

const menuItems = [
  {
    name: "BBQ Chicken",
    image: "./Images/bbq chicken.webp",
    description: "Tender chicken marinated in BBQ sauce."
  },
  {
    name: "BBQ Fish",
    image: "./Images/bbqFish.webp",
    description: "Crispy and tender fish fillet served with a rich and flavorful sauce."
  },
  {
    name: "Chana Masala",
    image: "./Images/chana.jpeg",
    description: "Aromatic and flavorful chana curry made with aromatic spices and vegetables."
  },
  {
    name: "Butter Chicken",
    image: "./Images/ButterChicken.jpeg",
    description: "Crispy and tender chicken cooked in a rich and creamy sauce."
  },
  {
    name: "Mix Vegetable",
    image: "./Images/mixv.jpeg",
    description: "Aromatic and flavorful vegetable dish made with fresh and aromatic vegetables."
  },
  {
    name: "Palak Paneer",
    image: "./Images/palak.jpeg",
    description: "Crispy and flavorful paneer dish with a rich and creamy sauce."   
  },
  {
    name: "Veggie",
    image: "./Images/mixveg.webp",
    description: "Aromatic and flavorful vegetable dish made with fresh and aromatic vegetables."
  },
  {
    name: "Noodles",
    image: "./Images/noodles.jpeg",
    description: "Crispy and flavorful noodles dish with a rich and creamy sauce."
  },    
  {
    name: "Fried Rice",
    image: "./Images/friedrice.jpeg",
    description: "Crispy and flavorful rice dish with a rich and creamy sauce."
  },
  {
    name: "Plain Rice",
    image: "./Images/rice.webp",
    description: "Plain Rice made with best Quality."
  },
  {
    name: "Naan",
    image: "./Images/naan.jpeg",
    description: "Crispy and flavorful naan dish with a rich and creamy sauce."
  },
  {
    name: "Garlic Naan",
    image: "./Images/garlicnaan.jpeg",
    description: "Crispy and flavorful naan dish with a rich and creamy sauce."
  },
  {
    name: "Coke",
    image: "./Images/coke.jpeg",
    description: "Coke is a carbonated soft drink."
  },
  {
    name: "Pepsi",
    image: "./Images/pepsi.jpeg",
    description: "Pepsi is a carbonated soft drink."
  },
  {
    name: "7up",
    image: "./Images/7up.webp",
    description: "7up is a carbonated soft drink."
  },
  {
    name: "Canada Dry",
    image: "./Images/cdry.webp",
    description: "Canada Dry is a carbonated soft drink."
  }
];

function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); 
  const [quantities, setQuantities] = useState(menuItems.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {}));

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
      <Navbar />

      <h1>Our Delicious Menu</h1>

      <div className="menu-items">
        {menuItems.map((menuItem, index) => (
          <div key={index} className="menu-item">
            <h3>{menuItem.name}</h3>
            <img src={menuItem.image} alt={menuItem.name} />
            <p>{menuItem.description}</p>
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

      <button className="view-order-btn" onClick={() => navigate("/Vieworder", { state: { cart } })}>
        View Order
      </button>

      <Footer />
    </div>
  );
}

export default Menu;
