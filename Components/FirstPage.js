import React from "react";
import {  useNavigate } from "react-router-dom";
import './Auth.css';


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
{/* <footer>
<div className="footer">
    <div id="imglogo"></div>
    <div className="fd1">
   <p><strong>Contact Us:</strong> <br/><br/>www.M&Nfoodzone.com <br/>m&nfoodzone@gmail.ca </p> 
   </div>
   <div className="fd1">
   <p><br/><strong>Follow Us:</strong> <br/><br/><a href="https://www.google.com/">Google</a><br/><a href="https://www.facebook.com/">Facebook</a><br/><a href="https://www.instagram.com/">Instagram</a> </p> 
   </div>
   <div className="fd1">
   <p><strong>Contact Us:</strong> <br/>www.M&Nfoodzone.com <br/>m&nfoodzone@gmail.ca </p> 
   </div>
   
</div>
</footer> */}
        </div>
    );
}

export default FirstPage;