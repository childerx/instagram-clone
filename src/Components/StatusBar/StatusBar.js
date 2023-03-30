import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import "./StatusBar.css";
import statusimg from '../../images/pp2.png';
import statusimg1 from '../../images/pp1.png';
import statusimg2 from '../../images/pp3.jpeg';
import statusimg3 from '../../images/pp4.jpeg';


class StatusBar extends Component{
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return(
            <div className="statusbar_container">
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg} />
                    <div className="statusbar_text">kwame_but</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg1} />
                    <div className="statusbar_text">kaywa_bt</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg2} />
                    <div className="statusbar_text">greg_edson</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg3} />
                    <div className="statusbar_text">blay_amp</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg} />
                    <div className="statusbar_text">freddie_bl</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg1} />
                    <div className="statusbar_text">kings_man</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg2} />
                    <div className="statusbar_text">folwor_ia</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg3} />
                    <div className="statusbar_text">desbin_rea</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg} />
                    <div className="statusbar_text">rools_feifv</div>
                </div>
                <div className="status">
                    <Avatar className="statusbar_status" src={statusimg1} />
                    <div className="statusbar_text">lilian_ther</div>
                </div>
            </div>
        );
    }
}

export default StatusBar;