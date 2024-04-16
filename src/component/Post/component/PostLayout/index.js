import React from "react";
import "./style.css"
import Post from "../PostLayout1";



const PostLayout = ({ post }) => {


    return <div key={post.id} className="post-container-layout"  

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