import React, {useState} from "react";
import styled from "styled-components";

import { PrimaryButton } from '../styles/buttons';
import CommentForm from './CommentForm';

const StyledButton = styled(PrimaryButton)`
  margin: 1em;
`;

function CommentButton(props) {
  const [commenting, commentMode] = useState(false);
  return (
    <div>
      {commenting ? (
        <CommentForm
          comments={props.comments}
          addComment={props.addComment}
          commentMode={commentMode}
          changeView={props.changeView}
        />
      ) : null}
      <StyledButton
        onClick={() => commentMode(!commenting)}
      >
        {commenting ? 'Cancel' : 'Comment'}
      </StyledButton>
    </div>

  )
}

export default CommentButton;
