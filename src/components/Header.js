import React from "react";
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  background: papayawhip;
  padding: 1em 2em;
  display: flex;
  align-items: center;
`;

function Header(props) {
  return (
    <StyledHeader>
      <h1>{props.title}</h1>
      <Nav
        links={props.links}
      >
      </Nav>
    </StyledHeader>
  )
}

export default Header;
