// import React from "react";
// import {  useNavigate } from "react-router-dom";
// import './Auth.css';
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// function Menu() {
//   const navigate = useNavigate();

//   return (
//     <div className="menu">
//       <Navbar />

//       <h1>Menu</h1>
//       <h1>BBQ</h1>
//       <h3>BBQ Chicken</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/bbqChicken" alt="BBQ Chicken" />
//       <h3>BBQ Fish</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/bbqFish" alt="BBQ Fish" />
//       <h1>Curries</h1>
//       <h3>Chana Masala</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/chana" alt="Chana Masala" />
//       <h3>Butter Chicken</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/ButterChicken" alt="Butter Chicken" /> 
//       <h3>Mix Vegetable</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/mixv" alt="Mix Vegetable" />
//       <h3>Palak Paneer </h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/palak" alt="Palak" />
//       <h1>Rice & Noodles</h1>
//       <h3>Chicken Biryani</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/ChickenBiryani" alt="Chicken Biryani" /> 
//       <h3>Veg Biryani</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/VegBiryani" alt="Veg Biryani" />
//       <h3>Noodles</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/noodles" alt="Noodles" />
//       <h3>Fried Rice</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/friedrice" alt="Fried Rice" />
//       <h3> Plain Rice</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/rice" alt="Plain Rice" />
//       <h1>Naans</h1>
//       <h3>Naan</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/naan" alt="Naan" />
//       <h3>Garlic Naan</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/garlicnaan" alt="Garlic Naan" />
//       <h1>Beverages</h1>
//       <h3>Coke</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/coke" alt="Coke" />
//       <h3>Pepsi</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/pepsi" alt="Pepsi" />
//       <h3>7up</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/7up" alt="7up" />
//       <h3>Canada Dry</h3>
//       <img src="/Users/mahammed/Desktop/restro/src/Components/cdry" alt="Canada Dry" />

      

//       <button className="menu_btn" onClick={() => navigate("/Vieworder")}>
//         View Order
//       </button>

//       <Footer />
//     </div>
//   );
// }

// export default Menu;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Auth.css'; 
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const menuItems = [
//   // Define your menu items here with properties like name, image path, etc.
//   {
//     name: "BBQ Chicken",
//     image: "/Users/mahammed/Desktop/restro/src/Components/bbqChicken",
//     description: "Tender chicken marinated in BBQ sauce."
//   },
//   {
//     name: "BBQ Fish",
//     image: "/Users/mahammed/Desktop/restro/src/Components/bbqFish",
//     description: "Crispy and tender fish fillet served with a rich and flavorful sauce."
//   },
//   {
//     name: "Chana Masala",
//     image: "/Users/mahammed/Desktop/restro/src/Components/chana",
//     description: "Aromatic and flavorful chana curry made with aromatic spices and vegetables."
//   },
//   {
//     name: "Butter Chicken",
//     image: "/Users/mahammed/Desktop/restro/src/Components/ButterChicken",
//     description: "Crispy and tender chicken cooked in a rich and creamy sauce."
//   },
//   {
//     name: "Mix Vegetable",
//     image: "/Users/mahammed/Desktop/restro/src/Components/mixv",
//     description: "Aromatic and flavorful vegetable dish made with fresh and aromatic vegetables."
//   },
//   {
//     name: "Palak Paneer",
//     image: "/Users/mahammed/Desktop/restro/src/Components/palak",
//     description: "Crispy and flavorful paneer dish with a rich and creamy sauce."   
//     },
//   {
//     name: "Veggie",
//     image: "/Users/mahammed/Desktop/restro/src/Components/veggie",
//     description: "Aromatic and flavorful vegetable dish made with fresh and aromatic vegetables."
//   },
//   {
//     name: "Noodles",
//     image: "/Users/mahammed/Desktop/restro/src/Components/noodles",
//     description: "Crispy and flavorful noodles dish with a rich and creamy sauce."
//   },    
//   {
//     name: "Fried Rice",
//     image: "/Users/mahammed/Desktop/restro/src/Components/friedrice",
//     description: "Crispy and flavorful rice dish with a rich and creamy sauce."
//   },
//   {
//     name: "Plain Rice",
//     image: "/Users/mahammed/Desktop/restro/src/Components/rice",
//     description: "Plain Rice made with best Quality."
//   },
//   {
//     name: "Naan",
//     image: "/Users/mahammed/Desktop/restro/src/Components/naan",
//     description: "Crispy and flavorful naan dish with a rich and creamy sauce."
//   },
//   {
//     name: "Garlic Naan",
//     image: "/Users/mahammed/Desktop/restro/src/Components/garlicnaan",
//     description: "Crispy and flavorful naan dish with a rich and creamy sauce."
//   },
//   {
//     name: "Coke",
//     image: "/Users/mahammed/Desktop/restro/src/Components/coke",
//     description: "Coke is a carbonated soft drink ."
//   },
//   {
//     name: "Pepsi",
//     image: "/Users/mahammed/Desktop/restro/src/Components/pepsi",
//     description: "pepsi is a carbonated soft drink ."
//   },
//   {
//     name: "7up",
//     image: "/Users/mahammed/Desktop/restro/src/Components/7up",
//     description: "7up is a carbonated soft drink ."
//     },
//     {
//       name: "Canada Dry",
//       image: "/Users/mahammed/Desktop/restro/src/Components/cdry",
//       description: "Canada Dry is a carbonated soft drink ."
//     }

// ];

  


// function Menu() {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]); 

//   const addToCart = (item, quantity) => {
//     setCart((prevCart) => [...prevCart, { item, quantity }]);
//   };

//   return (
//     <div className="menu">
//       <Navbar />

//       <h1>Our Delicious Menu</h1>

//       <div className="menu-items">
//         {menuItems.map((menuItem, index) => (
//           <div key={index} className="menu-item">
//             <h3>{menuItem.name}</h3>
//             <img src={menuItem.image} alt={menuItem.name} />
//             <p>{menuItem.description}</p>
//             <input
//               type="number"
//               min="1"
//               defaultValue="1"
//               onChange={(e) =>
//                 addToCart({ item: menuItem.name, quantity: parseInt(e.target.value) })
//               }
//             />
//             <button onClick={() => addToCart({ item: menuItem.name, quantity: 1 })}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="view-order-btn" onClick={() => navigate("/Vieworder", { state: { cart } })}>
//         View Order
//       </button>

//       <Footer />
//     </div>
//   );
// }

// export default Menu;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Auth.css'; // Assuming this styles the overall layout
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Menu.css"

const menuItems = [
  // Define your menu items here with properties like name, image path, etc.
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
    image: "./Images//ButterChicken.jpeg",
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
    description: "Coke is a carbonated soft drink ."
  },
  {
    name: "Pepsi",
    image: "./Images/pepsi.jpeg",
    description: "pepsi is a carbonated soft drink ."
  },
  {
    name: "7up",
    image: "./Images/7up.webp",
    description: "7up is a carbonated soft drink ."
    },
    {
      name: "Canada Dry",
      image: "./Images/cdry.webp",
      description: "Canada Dry is a carbonated soft drink ."
    }

];


function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]); 

  const addToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { item, quantity }]);
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
              min="1"
              defaultValue="1"
              onChange={(e) =>
                addToCart({ item: menuItem.name, quantity: parseInt(e.target.value) })
              }
            />
            <button onClick={() => addToCart({ item: menuItem.name, quantity: 1 })}>
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
