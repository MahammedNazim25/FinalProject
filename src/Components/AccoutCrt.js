import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Auth.css';
import Footer from "./Footer";


const AccountCreate = ()=> {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const Navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            console.log(userCredential);
            Navigate('/',{state:{email:userCredential.user.email}})
        } catch (error) {
            setError(error.message);
        }
    }


return(
    <div className="first">
    <main>
    <ul>
<li>Help</li>
<li>Policy</li>
<li>About</li>
</ul>
    <div className="firstpg" id="ath" >
        <p className="sl">You need to Create Account to order</p>
        <form onSubmit={handleSignUp}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
            <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
            <div className="btn-sgnIn">
          <button  className="bts" >
          Create Account
        </button>
        <button type="submit" className="bts" onClick={() => Navigate("/SignIn")}>SignIn</button>
        </div>

        </form>
        {error &&  <p className="error">{error}</p>}
        
        </div></main>
        <Footer/>
        </div>
)
}

export default AccountCreate;