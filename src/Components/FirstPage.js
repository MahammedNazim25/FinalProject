import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function FirstPage() {
  const navigate = useNavigate("./signIn");
  const location = useLocation();
  const email = location.state?.email;

  return (
    <div className="first">
      <ul>
        <li>
          <Link to="/Help">Help</Link>
        </li>
        <li>
          <Link to="/Policy">Policy</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <div className="firstpg">
        <h3>welcome to</h3>
        <h1>M&N</h1>
        <h1>Food Zone</h1>
        <h3>Fresh and DELICIOUS fOOD</h3>
        <button className="fpg_btn" onClick={() => navigate("/SignIn")}>
          <strong>VISIT</strong>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default FirstPage;
