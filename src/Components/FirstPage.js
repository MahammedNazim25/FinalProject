import React from "react";
import {  Navigate,useLocation, useNavigate } from "react-router-dom";
import './Auth.css';
import Footer from "./Footer";


function FirstPage(){

    const navigate = useNavigate("./signIn");


    const location = useLocation();
//   const navigate = useNavigate();
  const email = location.state?.email;

    return(
        <div className="first">
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
<button className="fpg_btn" onClick={() => navigate("/SignIn")}><strong>VISIT</strong></button>
</div>
{/* <div className="ft"><Footer/></div> */}
<Footer/>
        </div>
    );
}

export default FirstPage;