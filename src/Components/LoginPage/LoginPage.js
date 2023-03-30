import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import './LoginPage.css';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';
import SignIn from "../SignIn/SignIn";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state ={ }
    }
    render() {
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}> </Grid>

                    <Grid item xs={6}>
                        <div className="loginpage_main">
                           <div>
                                <img src={inst_image} width="450" />
                            </div> 
                        <div>
                        <div className="loginpage_rightcomponent">
                            <img className="loginpage_logo" src={insta_logo} />
                           <div className="loginpage_signin">
                               <SignIn/>
                            </div>

                            <div className="login_ordiv">
                               <div className="login_dividor"></div> 
                               <div className="login_or">OR</div> 
                               <div className="login_dividor"></div> 
                            </div> 
                            <div className="login_fb">
                                <img src={fb} width="15px" style={{"marginRight":"10px"}} />Log in with Facebook</div>
                            <div className="login_forgot">Forgot Password?</div>
                        </div>
                        

                        <div className="loginpage_signupoption">
                            <div className="loginpage_signin">
                                Don't have an account? <span style={{ "color":"#0395F6", "fontWidth":"bold"}}>Sign up</span>
                            </div>
                            <div className="loginpage_downloadSection">
                                <div>
                                Get the app.
                                </div>
                        
                            <div className="loginpage_option">
                                <img className="login_dwing" src={appstore} width="136px" />
                                <img className="login_dwing" src={playstore} width="136px" />
                        </div>
                        </div>
                        </div> 
                        </div> 

                        </div>
                    </Grid>

                    <Grid item xs={3}> </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;