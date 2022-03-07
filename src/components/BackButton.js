import React from "react";
import { PrimaryButton } from '../styles/buttons';

function BackButton(props) {
  return (
  <PrimaryButton onClick={() => props.changeView(false)}>Go back</PrimaryButton>
  )
}

export default BackButton;
