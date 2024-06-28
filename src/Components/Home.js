import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home =() => {
  return (
    <div className="about-us">
      <Navbar />
      <h2 className="abt">This is our home page</h2>
      <p className="abt">
        i will do
      </p>
      <Footer/>
    </div>
  );
}

export default Home;
