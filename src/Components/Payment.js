import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Payment = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            navigate("/success");
        }, 1000);
    };

    return (
        <div className="Payment">
            <div className="checkdt">
                <h2>Name:</h2>
                <input type="text" id="name" />
                <h2>Address:</h2>
                <textarea id="add" cols="40" rows="10" placeholder="Full Address here"></textarea><br />
                <p><h2>Payment Mode:</h2></p>
                <input className="radiob" type="radio" name="paymentMode" id="creditCard" />
                <label className="label" htmlFor="creditCard">Credit Card</label><br />
                <input className="radiob" type="radio" name="paymentMode" id="wallet" />
                <label className="label" htmlFor="wallet">Wallet</label><br />
                <input className="radiob" type="radio" name="paymentMode" id="onDelivery" />
                <label className="label" htmlFor="onDelivery">On delivery</label><br />
                <button className="bts pay" onClick={handleSubmit}>Pay</button>
                {isSubmitted && <p>Processing payment...</p>}
            </div>
        </div>
    );
};

export default Payment;
