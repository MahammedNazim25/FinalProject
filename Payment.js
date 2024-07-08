import React from "react";
import "./Auth.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Payment =() => {
    return(
        <div className="Payment">
            <Navbar/>
            <div class="checkdt">
        <h2>Name:</h2>
        <input type="text" name="" id="name"/>
        <h2>Address:</h2>
    <textarea name="" id="add" cols="40" rows="10" placeholder="Full Address here"></textarea><br/>
    <p><h2>Payment Mode:</h2></p>
    <input class="radiob" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="label" for="flexRadioDefault1">
    Credit Card
  </label><br/>
  <input class="radiob" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="label" for="flexRadioDefault1">
   Wallet
  </label><br/>
  <input class="radiob" type="radio" name="flexRadioDefault" />
  <label class="label" for="flexRadioDefault1">
    On delivery
  </label><br/>
  <button className="bts pay">Pay</button>
</div><Footer/>
        </div>
    )
};

export default Payment;