import React from "react";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

import ProfilePhoto from './ProfilePhoto';

const BannerImage = styled.img`
  width: 500px;
  max-width: 100%;
  border-radius: 5px;
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledPost = styled.div`
  background: dodgerblue;
  color: white;
  padding: 1em;
  margin: 1em;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledProfilePhoto = styled.div`
  margin-top: -50px;
`;

function PostDetails(props) {
  let { postId } = useParams();
  postId = parseInt(postId, 10);

  const post = props.posts.find(post => post.id === postId);

  return (
    <StyledPost>
      <StyledWrapper>
        <BannerImage src={post.background_image}></BannerImage>
        <StyledProfilePhoto>
          <ProfilePhoto photo={post.photo} />
        </StyledProfilePhoto>
      </StyledWrapper>
      <h1>{post.author}</h1>
    </StyledPost>
  )
}

export default PostDetails;
