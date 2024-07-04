import React, { useState } from "react";
import { Link ,Navigate,useNavigate } from "react-router-dom";
import './Navbar.css';
import Footer from "./Footer";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [DropmenuView, setDropmenuiew] = useState(false);


  const handleSignout = async () => {
    try {
        await signOut(auth);
        navigate("./SignIn")
    } catch (error) {
        console.log(error);
    }
    };

    const handleDropmenu =() =>{
      setDropmenuiew(!DropmenuView);
    };

  return (
    <div className="navbar">
      <ul>
        <li className="logo"><div></div></li>
        <li className="dropdown"><Link to="/Home" onMouseEnter={handleDropmenu} onMouseLeave={handleDropmenu}>Home</Link>
        {DropmenuView &&(
          <ul className="dropdown-menu" onMouseEnter={() => setDropmenuiew(true)} onMouseLeave={() => setDropmenuiew(false)}>
            <li><div className="Admin"><strong id="adm">Admin</strong></div></li>
            <li><Link to="/Admin">Admin Panel</Link></li>
            <li><Link to="/ManageWebsite">Manage Website</Link></li>
            
          </ul>
        )}
        </li>
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
