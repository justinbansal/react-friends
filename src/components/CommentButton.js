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
          insights={props.insights}
          setInsights={props.setInsights}
          id={props.id}
          log={props.log}
          setLog={props.setLog}
          photo={props.photo}
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
