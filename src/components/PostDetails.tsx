import React from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

import ProfilePhoto from './ProfilePhoto';

import locationSVG from '../location.svg';
import briefcaseSVG from '../briefcase.svg';

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

const StyledSVG = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 1em;
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function PostDetails() {
  let { postId } = useParams();
  postId = parseInt(postId, 10);

  const post = useSelector(state => state.posts.find(post => post.id === postId));

  return (
    <StyledPost>
      <StyledWrapper>
        <BannerImage src={post.background_image}></BannerImage>
        <StyledProfilePhoto>
          <ProfilePhoto photo={post.photo} />
        </StyledProfilePhoto>
      </StyledWrapper>
      <h1>{post.author}</h1>
      <SVGWrapper>
        <StyledSVG src={briefcaseSVG} alt="occupation" /><h3>{post.occupation}</h3>
      </SVGWrapper>
      <SVGWrapper>
        <StyledSVG src={locationSVG} alt="location" /><h3>Lives at {post.location}</h3>
      </SVGWrapper>
    </StyledPost>
  )
}

export default PostDetails;
