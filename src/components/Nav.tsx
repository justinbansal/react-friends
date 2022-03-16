import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/posts">Posts</StyledLink>
    </StyledNav>
  )
}

export default Nav;
