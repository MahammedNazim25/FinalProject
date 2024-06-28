import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ViewOrder =() => {
  return (
    <div className="about-us">
      <Navbar />
      <h2 className="abt">This is our ViewOrder page</h2>
      <p className="abt">
        order data <br/>
        Notification <br/>
        fgdr<br/>
        gfhfgh
      </p>
      <Footer/>
    </div>
  );
}

export default ViewOrder;
