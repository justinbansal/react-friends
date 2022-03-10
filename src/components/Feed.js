import React from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";

import Post from './Post';
import Header from "./Header";
import Footer from "./Footer";
import AddPost from "../features/posts/AddPost";

const StyledFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Feed(props) {
  const posts = useSelector(state => state.posts.map(post => {
    return (
      <Post
        post={post}
        key={post.id}
        insights={props.insights}
        setInsights={props.setInsights}
        log={props.log}
        setLog={props.setLog}
      />
    )
  }));

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
