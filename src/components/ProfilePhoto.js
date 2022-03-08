import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.img`
  width: ${props => props.size ? `${props.size}px` : '150px'};
  border-radius: 50%;
`;

function ProfilePhoto(props) {
  return (
    <StyledPhoto src={props.photo} size={props.size}/>
  )
}

export default ProfilePhoto;
