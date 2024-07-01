import React from "react";
import { Navigate,useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleSignout = async () => {
    try {
      await signOut(auth);
      navigate("./SignIn"); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="about-us" id="obst">
      <Navbar />
      <h2 className="abt">Hi {email ? email : "user"} welcome here!</h2>
      <button onClick={handleSignout}>Sign Out</button>
      <Footer />
    </div>
  );
};

export default Home;
