import React, { useEffect, useState } from 'react';
import { useNavigate, useParams,useLocation } from 'react-router-dom';
import "./style.css"
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './actions';
import leftArrow from "../../assets/leftarrow.svg";
import PostLayout from '../../component/Post/component/PostLayout';


function Post() {
  const { id } = useParams();
  console.log("postId",id)

    const post= useSelector((state) => state?.post?.posts);
    
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPost(id))
    console.log("location",{location})
  }, [id]);
  const navigate = useNavigate();
  const location =useLocation()

  return (
    <div className='post-container'>
        <div style={{border:"2px solid red",width:'fit-content'}}
            onClick={()=>{
                navigate('/',{state: location.state})
                // window.history.back()
            }}
        >
            <img src={leftArrow}/>
        </div>
      {post ? (
        <div>
          <PostLayout post={post} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Post