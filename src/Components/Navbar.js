import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo"><div></div></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/ViewOrder">View Orders</Link></li>
      </ul>
      {/* <Footer /> */}
    </div>
  );
};

export default Navbar;
