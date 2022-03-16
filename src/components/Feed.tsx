import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../app/hooks';
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

function Feed(props: any) {
  const dispatch = useAppDispatch();
  const postStatus = useAppSelector(state => state.posts.status);
  const posts = useAppSelector(state => state.posts.entries.map((post: any) => {
    if (postStatus === 'loading') {
      return (
        <h2>Loading....</h2>
      )
    }

    return (
      <Post
        post={post}
        key={post.idDrink}
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
