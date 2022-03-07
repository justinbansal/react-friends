import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.img`
  width: 150px;
  border-radius: 50%;
`;

function ProfilePhoto(props) {
  return (
    <StyledPhoto src={props.photo} />
  )
}

export default ProfilePhoto;
