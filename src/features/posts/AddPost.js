import React, { useState } from "react";
import styled from "styled-components";

import { SecondaryButton } from '../../styles/buttons';

const Wrapper = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  background: papayawhip;
  max-width: 500px;
  margin: 0 auto;
  bored-radius: 10px;

  input,
  textarea {
    padding: 1em 1.5em;
    border: 0;
    margin: 1em 0.5em;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 1em;
`

function AddPost() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  return (
    <Wrapper>
      <h2>Add Post</h2>
      <StyledForm>
        <FormGroup>
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            type="text"
            onChange={handleTitleChange}
            value={title}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleMessageChange}
          />
        </FormGroup>
      </StyledForm>

      <SecondaryButton>Save Post</SecondaryButton>
    </Wrapper>
  )
}

export default AddPost;
