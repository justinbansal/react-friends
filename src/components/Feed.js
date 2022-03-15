import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { fetchPosts } from '../features/posts/postSlice';

import Post from './Post';
import Header from "./Header";
import Footer from "./Footer";
import AddPost from "../features/posts/AddPost";

const StyledFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Feed(props) {
  const dispatch = useDispatch();
  const postStatus = useSelector(state => state.posts.status);
  const posts = useSelector(state => state.posts.entries.map(post => {
    if (postStatus === 'loading') {
      return (
        <h2>Loading....</h2>
      )
    }

    return (
      <Post
        post={post}
        key={post.idDrink}
        insights={props.insights}
        setInsights={props.setInsights}
        log={props.log}
        setLog={props.setLog}
      />
    )
  }));

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  return (
    <div>
      <Header
        title="Fun with Friends"
        insights={props.insights}
        log={props.log}
      />
      <AddPost />
      <StyledFeed>
      {posts}
      </StyledFeed>
      <Footer info="Fun with Friends 2022"></Footer>
    </div>

  )
}

export default Feed;
