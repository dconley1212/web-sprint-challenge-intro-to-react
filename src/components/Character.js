// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
  color: #ffe81f;
  background-color: black;
  padding: 0.1rem;
  margin: 3rem 10rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightgrey;
  }
`;

export default function Character(props) {
  const { character } = props;

  return (
    <div>
      <StyledCharacters>
        <h2>{character.name}</h2>
      </StyledCharacters>
    </div>
  );
}
