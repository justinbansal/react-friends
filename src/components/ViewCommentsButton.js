import React from "react";
import { PrimaryButton } from '../styles/buttons';

function ViewCommentsButton(props) {
  return (
    <PrimaryButton
      onClick={() => props.changeView(true)}
    >
      View Comments ({props.comments.length})
    </PrimaryButton>
  )
}

export default ViewCommentsButton;
