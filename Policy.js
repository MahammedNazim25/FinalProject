import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Policy=() =>{
    const navigate = useNavigate();
    const goToHomePage = () => {
      navigate('/');
    };
    return(
        <div className="Policydt">
        <div className="Policy">
        <h1>Terms & Policy</h1>
    <h3 className="policyhead">Introduction</h3>

<p>This website is operated by Navneet Kaur and Mahammed Nazim. The use of our website is subject to the following terms and conditions of use, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.

 

<h3 className="policyhead">Use of our Website</h3>

 You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract.

<h3 className="policyhead">General Conditions</h3>
 
 We reserve the right to refuse service to anyone, at any time, for any reason. We reserve the right to make any modifications to the website, including terminating, changing, suspending or discontinuing any aspect of the website at any time, without notice. We may impose additional rules or limits on the use of our website. You agree to review the Terms regularly and your continued access or use of our website will mean that you agree to any changes.
        
      </p> 
      <button className="bts" onClick={goToHomePage}>Exit</button> 
        </div>
        <Footer/>
        </div>
    );
}

export default Policy;