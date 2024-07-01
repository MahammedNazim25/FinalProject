import React from "react";
import { Link ,Navigate,useNavigate } from "react-router-dom";
import './Navbar.css';
import Footer from "./Footer";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
        await signOut(auth);
        navigate("./SignIn")
    } catch (error) {
        console.log(error);
    }
    }

  return (
    <div className="navbar">
      <ul>
        <li className="logo"><div></div></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/ViewOrder">View Orders</Link></li>
        <li><Link onClick={handleSignout}>LogOut</Link></li>
      </ul>
      {/* <Footer /> */}
    </div>
  );
};

export default Navbar;
