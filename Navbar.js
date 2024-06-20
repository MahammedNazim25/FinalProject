import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const  Navbar =() => {
    return(
        <div className="navbar">
         <ul>
        <li className="logo"><div></div></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="View">View Order</Link></li>
        </ul>
        </div>
    )
}

export default Navbar;
