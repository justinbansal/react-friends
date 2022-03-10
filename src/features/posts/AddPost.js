import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from './postSlice';
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
    padding: 0.5em 1.5em;
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
  const [name, setName] = useState('');
  const [episode, setEpisode] = useState('');
  const [quote, setQuote] = useState('');

  const dispatch = useDispatch();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEpisodeChange(e) {
    setEpisode(e.target.value);
  }

  function handleQuoteChange(e) {
    setQuote(e.target.value);
  }

  return (
    <Wrapper>
      <h2>Add your favourite Character</h2>
      <StyledForm>
        <FormGroup>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            onChange={handleNameChange}
            value={name}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="episode">Favourite Episode:</label>
          <input
            name="episode"
            type="text"
            onChange={handleEpisodeChange}
            value={episode}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="quote">Favourite Quote:</label>
          <input
            name="quote"
            type="text"
            onChange={handleQuoteChange}
            value={quote}
          />
        </FormGroup>
      </StyledForm>

      <SecondaryButton
        onClick={() => {
          dispatch(addPost({
            id: nanoid(),
            name: name,
            episode: episode,
            quote: quote,
          }))
        }}
      >
        Save Post
      </SecondaryButton>
    </Wrapper>
  )
}

export default AddPost;
