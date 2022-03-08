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
      <StyledButton
        onClick={() => {
          setLikes(likes + 1)
          const insights = props.insights.slice();
          const log = props.log.slice();
          insights.filter(post => {
            if (post.id === props.id) {
              post.likes += 1;
              log.push({
                author: post.author,
                message: `${post.author}'s post just got a like`,
                photo: props.photo,
              })
            }
            return post;
          })
          props.setInsights(insights);
          props.setLog(log);
        }}
      >
        <img src={like} alt="Like button"></img>
      </StyledButton>
      <div>
        <small>{likes > 0 ? likes > 1 ? `${likes} people liked this` : `${likes} person liked this` : null}</small>
      </div>
    </div>
  )
}

export default LikeButton;
