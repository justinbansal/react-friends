import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: papayawhip;
  padding: 1em;
`;

function Footer(props: any) {
  return (
    <StyledFooter>
      <h3>{props.info}</h3>
    </StyledFooter>
  )
}

export default Footer;
