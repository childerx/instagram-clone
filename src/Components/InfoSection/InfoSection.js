import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import './InfoSection.css';
import imageSrc from '../../images/dp6.png';

class InfoSection extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div>
                <div className="info_container">
                    <Avatar src={imageSrc} className="info_image" />
                    <div className="info_content">
                        <div className="info_username">steph_curry</div>
                        <div className="info_description">=description=</div>
                    </div>
                    <span style={{"marginLeft":"41px", "color":"#0395F6", "fontSize":"12px", "marginTop":"20px"}}>Switch</span>
                </div>
            </div>
        );
    }
}
export default InfoSection;