import React from "react";
import { PrimaryButton } from '../styles/buttons';

function BackButton(props: any) {
  return (
    <PrimaryButton onClick={() => props.changeView(false)}>Go back</PrimaryButton>
  )
}

export default BackButton;
