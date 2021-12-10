// Write your Character component here
import React from "react";

export default function Character(props) {
  const { character } = props;
  console.log(character);

  return (
    <div>
      <h2>{character.name}</h2>
    </div>
  );
}
