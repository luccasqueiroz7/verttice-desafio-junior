import { useState } from "react";
import { Header } from "../../components/Header";

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
      <section>
        <form>
          <input
            type="text"
            placeholder="Digite aqui"
            onChange={(event) => charactersCounter(event.target.value)}
          />
        </form>
        {Object.entries(characters).map((elem, index) => (
          <ul key={index}>
            <li>
              <p>{elem[0]}</p>
            </li>
            <li>
              <p>{elem[1]}</p>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
};
