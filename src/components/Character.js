// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.h2`
  color: #ffe81f;
  background-color: black;
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
