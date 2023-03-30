import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import './Suggestion.css';
import imageSrc from '../../images/pp1.png';
import imageSrc1 from '../../images/pp2.png';
import imageSrc2 from '../../images/pp3.jpeg';
import imageSrc3 from '../../images/pp4.jpeg';

class Suggestion extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <div className="suggestion_container">
                    <div className="suggestion_header">
                        <div style={{ "fontSize":"15px"}}>Suggestions For You</div><span style={{"marginLeft":"83px", "color":"#000", "fontSize":"12px",  "marginTop":"2px"}}>See All</span>
                    </div>
                    <div className="suggestion_body">
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc} className="suggestion_image" />
                            <div className="suggestion_username">friendie_1</div><span style={{"marginLeft":"90px", "color":"#0395F6", "fontSize":"12px", "marginTop":"10px"}}>Follow</span>
                        </div>
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc1} className="suggestion_image" />
                            <div className="suggestion_username">friendie_1</div><span style={{"marginLeft":"90px", "color":"#0395F6", "fontSize":"12px", "marginTop":"10px"}}>Follow</span>
                        </div>
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc2} className="suggestion_image" />
                            <div className="suggestion_username">friendie_1</div><span style={{"marginLeft":"90px", "color":"#0395F6", "fontSize":"12px", "marginTop":"10px"}}>Follow</span>
                        </div>
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc3} className="suggestion_image" />
                            <div className="suggestion_username">friendie_1</div><span style={{"marginLeft":"90px", "color":"#0395F6", "fontSize":"12px", "marginTop":"10px"}}>Follow</span>
                        </div>
                        <div className="suggestion_friends">
                            <Avatar src={imageSrc} className="suggestion_image" />
                            <div className="suggestion_username">friendie_1</div><span style={{"marginLeft":"90px", "color":"#0395F6", "fontSize":"12px", "marginTop":"10px"}}>Follow</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Suggestion;