import React from "react";
import {  useNavigate } from "react-router-dom";
import './Auth.css';
import Footer from "./Footer";


function FirstPage(){

    const navigate = useNavigate("./signIn");

    return(
        <div className="first">
            <main>
            <ul>
        <li>Help</li>
        <li>Policy</li>
        <li>About</li>
      </ul>
            <div className="firstpg">
<h3>welcome to</h3>
<h1>M&N</h1>
<h1>Food Zone</h1>
<h3>Fresh and DELICIOUS fOOD</h3>
<button className="fpg_btn" onClick={() => navigate("/SignIn")}>View Menu</button>
</div></main>
{/* <Footer/> */}
        </div>
    );
}

export default FirstPage;