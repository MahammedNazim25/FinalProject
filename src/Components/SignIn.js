import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import "./Auth.css";
import Footer from "./Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const [emailSuccess, setemailSuccess] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      Navigate("/Home", { state: { email: userCredential.user.email } });
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePWreset = async () => {
    setError(null);
    setemailSuccess(null);
    try {
      await sendPasswordResetEmail(auth, email);
      setemailSuccess(
        "Reset Password mail send. check your email inbox to reset pasword."
      );
    } catch (error) {
      setError(error.message);
    }
  };

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
      <div className="firstpg" id="ath">
        <p className="sl">You need to SignIn to order</p>
        <form onSubmit={handleSignIn}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <div className="btn-sgnIn">
            <button type="submit" className="bts">
              SignIn
            </button>
            <button onClick={() => Navigate("/AccountCreate")} className="bts">
              Create Account
            </button>
            <button type="button" className="forgotbtn" onClick={handlePWreset}>
              Forgot Your Password?
            </button>
          </div>
        </form>
        {error && <p className="error">{"There is a error in your"}</p>}
        {emailSuccess && <p className="success">{emailSuccess}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
