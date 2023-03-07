import { useState } from "react";

export const ChallengerThree = () => {
  const numbers = [
    [10, 3, 5, 6, 20],
    [7, 8, 5, 2, 10],
    [6, 3, 17, 6, 2],
    [],
    [7],
    [1, 2, 4, 333, 5],
  ];
  const [resultProduct, setResultProduct] = useState(0);

  function productOfValues(arrayNumbers) {
    if (arrayNumbers.length === 0) {
      setResultProduct(0);
    } else if (arrayNumbers.length === 1) {
      setResultProduct(arrayNumbers[0]);
    } else {
      arrayNumbers.sort((a, b) => b - a);
      setResultProduct(arrayNumbers[0] * arrayNumbers[1]);
    }
  }

  return (
    <section>
      <ul>
        <h3>Arrays de teste</h3>
        {numbers.map((arr, index) => (
          <li key={index}>
            <button onClick={() => productOfValues(arr)}>[{arr.join(", ").split("")}]</button>
          </li>
        ))}
      </ul>
      <h2>Resultado: {resultProduct}</h2>
    </section>
  );
};
