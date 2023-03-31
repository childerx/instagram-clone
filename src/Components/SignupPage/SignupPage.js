import React, { Component } from "react";
import './SignupPage.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <div style={{"fontSize":"18px", "color":"#BEBEBE", "fontWeight":"bold", "marginBottom":"15px"}}>Sign up to see photos and videos <span style={{"display":"block"}}>from your friends.</span></div>
                 <input className="loginpage_text" type="text" placeholder="Mobile Number or Email" />
                 <input className="loginpage_text" type="text" placeholder="Full Name" />
                 <input className="loginpage_text" type="text" placeholder="Username" />
                 <input className="loginpage_text" type="password" placeholder="Password" />
                <button className="login_button">Sign Up</button>
            </div>
        );
    }
}

export default Signup;