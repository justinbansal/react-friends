import React from "react";
import styled from "styled-components";

import Post from './Post';

const StyledFeed = styled.div`
  display: flex;
`;

function Feed(props) {
  const posts = props.posts.map(post => {
    return (
      <Post post={post} key={post.id}/>
    )
  })

  return (
    <StyledFeed>
      {posts}
    </StyledFeed>
  )
}

export default Feed;
