import React, {useState} from 'react';
import './loginsignup.css';

import email_icon from '../icons/email.png';
import person_icon from '../icons/person.png';
import password_icon from '../icons/password.png';

export const LoginSignup = () => {
    const [action, setAction] = useState("Login");

return (
   <div className="container1">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"?<div></div>:
                <div className="input">
                <img src={person_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>            
        </div>
        {
        action === "Sign up"? 
        <div></div>:
        <div className="forgot-password">Forgot Password? <span>Click here</span></div>
        }
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=> setAction("Sign up")}>Sign Up</div>
            <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=> setAction("Login")}>login</div>
        </div>
   </div>
  )
}
export default LoginSignup;
