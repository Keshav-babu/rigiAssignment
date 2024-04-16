

import React, { useEffect, useState } from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getAllUsers } from "./actions";
import Header from "../../component/header";
import Users from "../../component/Users";
import PostLayout from "../../component/Post/component/PostLayout";
import Spinner from "../../component/Spinner";
import { Virtuoso } from "react-virtuoso";
import { debounce } from "../../config/constants";
// import { useH } from 'react-router-dom';
import {useLocation, useNavigate} from 'react-router-dom'

const Home = () => {
  const [page, setPage] = useState(1);

  const allUsers = useSelector((state) => state?.home);
  const allPosts = useSelector((state) => state?.home?.allPost);

  const dispatch = useDispatch();
  const location =useLocation()

  const navigate = useNavigate();
  const loadMorePosts = async () => {
    await debounce(2000);
    dispatch(getAllPosts(page));
    setPage((prevPage) => prevPage + 1);
  };
  const scrollPosition = window.scrollY;

  useEffect(() => {
    console.log("location1234",{location})
    dispatch(getAllUsers());
    loadMorePosts();
    window.scroll(0, scrollPosition);
  }, []);



  const Footer = () => {
    return (
      <div 
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </div>
    )
  }


  
  return (
    <section>
      <Header />
      <div className="container">
        <div className="left">
          <Virtuoso
            increaseViewportBy={200}
            data={allPosts}
            endReached={loadMorePosts}
            style={{ height: '80vh' }}
            totalCount={allPosts.length}
            itemContent={(index) => <PostLayout  key={index} post={allPosts[index]} />}
            components={{ Footer }}
          />
        </div>
        {allUsers?.isUsersLoading && (
          <div className="right">
            <p>Members</p>
            <div className="memberss-container">
              {allUsers?.allUsers?.map((user) => <Users key={user.id} user={user} />)}
            </div>
          </div>
        )}
      </div>

      {/* <a href="/post/1 ">Post</a> */}
      <p onClick={()=>{
        navigate('/post/1');
        // history.push('/post/1');
      }} >Post</p>
    </section>
  );
};

export default Home;
