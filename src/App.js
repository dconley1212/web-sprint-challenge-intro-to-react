import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 3rem;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        setCharacters(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <StyledTitle>
        <h1 className="Header">React Wars</h1>
      </StyledTitle>
      {characters.map((character) => {
        return <Character character={character} key={character.created} />;
      })}
    </div>
  );
};

export default App;
