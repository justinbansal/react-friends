import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Post from './Post';

const StyledFeed = styled.div`
  display: flex;
`;

function Feed(props) {
  const posts = props.posts.map(post => {
    return (
      <Post
        post={post}
        key={post.id}
        setLikes={props.setLikes}
        likes={props.likes}
        insights={props.insights}
        setInsights={props.setInsights}
        log={props.log}
        setLog={props.setLog}
      />
    )
  })

  return (
    <StyledFeed>
      {posts}
    </StyledFeed>
  )
}

export default Feed;
