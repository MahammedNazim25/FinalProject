import React from "react";
import "./Auth.css";
import Footer from "./Footer";
import { Navigate,useNavigate } from "react-router-dom";

const Help = () => {
const navigate = useNavigate();

const handleSubmit = (e) =>{
  e.preventDefault();
  alert("Your Request is Send.");
};
const goToHomePage = () => {
  navigate('/');
};

  return (
    <div className="help" >
     <div className="helpcont">
      <h1>Help Zone:</h1>

      <section>
        <h2>Managing Your Account</h2>
        <p>
          M&N team is always here to help you and solve your doubts.Once logged in, you can view and manage your account details from the profile section.
          Here you can update your personal information and view your order history.
        </p>
      </section>
      <section>
        <h2>Placing an Order</h2>
        <p>
          To place an order, simply add items to your cart and proceed to checkout.
          You can review your order and provide delivery details before confirming your purchase.
        </p>
      </section>
      <section>
        <form className="helpform" onSubmit={handleSubmit}>
        <h2>For Help:</h2>
          <div className="formdata">
            <label>Email:</label>
            <input type="email" placeholder="Enter your Email"   />
          </div>
          <div className="formdata">
            <label>Password:</label>
            <input type="password" placeholder="Enter your Password"  />
          </div>
          <div className="formdata">
            <label>Your Query:</label>
            <textarea placeholder="Type Here"></textarea>
          </div>
          <div>
          <button type="submit" className="bts">Submit</button>
          <button className="bts" onClick={goToHomePage}>Exit</button></div>

        </form>
      </section></div>
      <Footer/>
    </div>
  );
};

export default Help;
