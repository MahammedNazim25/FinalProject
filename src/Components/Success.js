import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Success = () => {
    const navigate = useNavigate();

    const handleHomeNavigation = () => {
        navigate("/");
    };

    return (
        <div className="Success">
            <h2>Payment Successful!</h2>
            <button className="btshome" onClick={handleHomeNavigation}>Go to Homepage</button>
        </div>
    );
};

export default Success;