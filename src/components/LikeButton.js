import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { postsSlice, updateReactions, updateDrawer } from '../features/posts/postSlice';
import styled from "styled-components";

import like from '../like.png';

const StyledButton = styled.button`
  background: transparent;
  border: 0;
`;

function LikeButton(props) {
  const { id, name } = props;
  const likes = useSelector(state => {
    return state.posts.entries.find(post => post.id === id).reactions.likes;
  })

  const dispatch = useDispatch();

  return (
    <div>
      <StyledButton
        onClick={() => {
          dispatch(updateReactions({
            id: id,
            reaction: 'likes',
            message: `A post about ${name} was just liked`,
          }))

          dispatch(updateDrawer());
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
