import React from "react";
import "./style.css"
import Post from "../PostLayout1";
import { useNavigate } from "react-router-dom";



const PostLayout = ({ post }) => {

    const navigate = useNavigate();

    return <div key={post.id} className="post-container-layout"  
    onClick={()=>{
        navigate( `/post/${post.id}`,{state:post});
    }}
    >
        <img 
            className="profile-picture"
            src={post?.author?.profilePictureUrl}
            alt={post?.author?.name}
            loading='lazy'
        />
        <div  className="post-content">
            <p>{post?.author?.name}</p>
            <p>{post?.text}</p>
            {post?.attachments?.length>0&&<Post attachments={post?.attachments}/>}
        </div>
    </div>
}


export default PostLayout;