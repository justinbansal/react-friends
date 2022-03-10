import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: white;
  color: midnightblue;
  padding: 0.5em 1em;
  border: 0;
  border-radius: 10px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: midnightblue;
  color: white;
`;
