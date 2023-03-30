import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import "./Post.css";

import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';


class Post extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            commentList: []
         }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=() =>{
        let data = [
            {
                "username": "edith__",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "I made the first comment here..."
            },
            {
                "username": "frick_drick",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "Mine followed as well..."
            },
            {
                "username": "ben_garzy",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "I'll always take this position"
            },
            {
                "username": "jake_bans",
                "commentId": "1234",
                "timeStamp": "123456",
                "description": "why last! lol..."
            }
        ];

        this.setState({commentList: data});
    }

    render() {
        return(
            <div className="post_container">

                <div className="post_header">
                    <Avatar className="post_image" src="" />
                    <div className="post_username">{this.props.userName}</div>
                </div>
                <div>
                    <img src={this.props.postImage} width="614px" />
                </div>
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={love} className="post_reactimage"/>
                        <img src={comment} className="post_reactimage"/>
                        <img src={share} className="post_reactimage"/>
                    </div>
                    <div style={{"fontWeight":"bold", "marginLeft":"20px"}}>
                       {this.props.likes} likes
                    </div>
                </div>
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            <div className="post_comment"><span style={{"fontWeight":"bold"}}>{item.username}</span> {item.description}</div>
                        ))
                    }
                
                    <input type="text" className="post_commentbox" placeholder="Add a comment..."/>
                </div>
            </div>
        );
    }
}

export default Post;