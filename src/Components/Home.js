import React from "react";
import { Navigate,useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import "./Home.css";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  return (
    <div className="about-us" id="obst">
      <Navbar />
      <div className="info">
      <h2 className="hh">Welcome <span id="eml">{email ? email : "user"}</span> !</h2>
        <h3 id="bd">Enjoy Brunch & Dinner with us<br/><strong>Best and Healthy food</strong></h3>
        <p id="txt">Grab their attention and make their mouth water once they start browsing your page and checking out all the visual content you have in store for them.The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home</p>
        <button className="view_btn" onClick={() => navigate('/menu')}>View Menu</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
