import React, {useState} from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  input {
    padding: 1em 1.5em;
    border-radius: 10px;
    border: 0;
    margin: 1em 0.5em;
  }

  input[type="submit"] {
    background: midnightblue;
    color: white;
  }
`;

function CommentForm(props) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!value) return;

    const updatedComments = props.comments.slice();
    updatedComments.push(value);
    props.addComment(updatedComments);

    props.commentMode(false);

    props.changeView(true);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <input
          type="text"
          name="comment"
          placeholder="write a comment..."
          value={value}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit"/>
    </StyledForm>
  )
}

export default CommentForm;
