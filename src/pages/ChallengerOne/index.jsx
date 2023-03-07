import { useState } from "react";
import { Header } from "../../components/Header";
import { ChallengerOneSection } from "./style";

export const ChallengerOne = () => {
  const [characters, setCharacters] = useState({});

  function charactersCounter(string) {
    let objCharactersCounter = {};
    let splitedString = string.toLowerCase().split("");

    splitedString.forEach((character) => {
      if (character !== " ") {
        objCharactersCounter[character] = splitedString.join("").split(character).length - 1;
      }
    });

    setCharacters(objCharactersCounter);
  }
  return (
    <>
      <Header />
      <ChallengerOneSection>
        <form>
          <input
            type="text"
            placeholder="Digite aqui"
            onChange={(event) => charactersCounter(event.target.value)}
          />
        </form>
        <ul>
          <h2>Contagem de caracteres</h2>
          {Object.entries(characters).map((elem, index) => (
            <li key={index}>
              <p>
                {elem[0]}: {elem[1]}
              </p>
            </li>
          ))}
        </ul>
      </ChallengerOneSection>
    </>
  );
};
