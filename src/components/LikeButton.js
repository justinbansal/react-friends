import React, {useState} from "react";
import styled from "styled-components";

import like from '../like.png';

const StyledButton = styled.button`
  background: transparent;
  border: 0;
`;

function LikeButton(props) {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <StyledButton onClick={() => setLikes(likes + 1)}>
        <img src={like} alt="Like button"></img>
      </StyledButton>
      <div>
        <small>{likes > 0 ? likes > 1 ? `${likes} people liked this` : `${likes} person liked this` : null}</small>
      </div>
    </div>
  )
}

export default LikeButton;
