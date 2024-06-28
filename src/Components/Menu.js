import React from "react";
import {  useNavigate } from "react-router-dom";
import './Auth.css';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Menu() {

    const navigate = useNavigate();
    return (
        <div className="menu">
            <Navbar />
            // list of items in menu

            <li>Item 1  </li>
            <li>Item 2</li>
            <li>Item 3</li>

            <button className="menu_btn" onClick={() => navigate("/Menu")}>View Menu</button>


           

        </div>
    );
}

export default Menu;