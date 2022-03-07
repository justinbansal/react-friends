import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Post from './Post';

const StyledFeed = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 1em;
  margin: 1em;
  width: 500px;
`;

function Feed(props) {
  const posts = props.posts.map(post => {
    return (
      <StyledLink to={`/posts/${post.id}`} key={post.id}>
        <Post post={post}/>
      </StyledLink>
    )
  })

  return (
    <StyledFeed>
      {posts}
    </StyledFeed>
  )
}

export default Feed;
