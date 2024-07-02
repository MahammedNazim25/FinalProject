import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Auth.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const [error, setError] = useState(null);
  
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
  
    return (
      <div className="first">
            <main>
            <ul>
        <li>Help</li>
        <li>Policy</li>
        <li>About</li>
      </ul>
            <div className="firstpg" id="ath" >
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
          <button type="submit" className="bts"  >SignIn</button>
          <button onClick={() => Navigate("/AccountCreate")} className="bts">
          Create Account
        </button>
        </div>
        </form>
        {error && <p className="error">{error}</p>}
        
        </div></main>

        </div>
    );
  };

  export default SignIn;