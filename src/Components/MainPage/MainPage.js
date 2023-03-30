import React, { Component } from "react";
import Post from "../Posts/Post";
import "./MainPage.css";


class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            // postArray: []
         }
    }

//    componentDidMount(){
//         this.getPost();
//    }

//     getPost=()=>{
//         let data=[
//             {
//                 "postId":"1234",
//                 "userName":"Nana_Khay",
//                 "postImageURL":"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//                 "timeStamp":"12345",
//                 "likes":"1,324"
//             },
//             {
//                 "postId":"1234",
//                 "userName":"Nana_Khay",
//                 "postImageURL":"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//                 "timeStamp":"12345",
//                 "likes":"1,324"
//             },
//             {
//                 "postId":"1234",
//                 "userName":"Nana_Khay",
//                 "postImageURL":"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//                 "timeStamp":"12345",
//                 "likes":"1,324"
//             },
//             {
//                 "postId":"1234",
//                 "userName":"Nana_Khay",
//                 "postImageURL":"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//                 "timeStamp":"12345",
//                 "likes":"1,324"
//             },
//             {
//                 "postId":"1234",
//                 "userName":"Nana_Khay",
//                 "postImageURL":"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
//                 "timeStamp":"12345",
//                 "likes":"1,324"
//             }
//         ];
//         this.setState({postArray: data});
//     }

    render() {
        return(
            <div>
                {/* {
                    this.state.postArray.map((item,index)=>{
                        <Post id={item.postId} userName={item.userName} postImage={item.postImageURL} likes={item.likes} />
                    })
                } */}
                <Post id="1234" userName="Nana khams" postImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" likes="7,223" />
                <Post id="1234" userName="Edson_Bob" postImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" likes="1,223" />
                <Post id="1234" userName="Steph_" postImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" likes="3,210" />
                <Post id="1234" userName="Mens__Cook" postImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" likes="12,823" />

            </div>
        );
    }
}

export default MainPage;