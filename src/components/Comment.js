import React from "react";
import styled from "styled-components";

const StyledComment = styled.div`
  background: midnightblue;
  padding: 1em;
  margin: 1em 0;
  border-radius: 10px;
  text-align: left;
`;

function Comment(props) {
  return (
    <StyledComment>
      <p>{props.comment}</p>
    </StyledComment>
  )
}

export default Comment;
