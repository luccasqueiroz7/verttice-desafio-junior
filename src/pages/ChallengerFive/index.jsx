import { Header } from "../../components/Header";
import { CalculatorSection } from "./style";

export const ChallengerFive = () => {
  const calculator = [7, 8, 9, "÷", 4, 5, 6, "x", 1, 2, 3, "-", 0, ".", "+", "="];
  return (
    <>
      <Header></Header>
      <CalculatorSection>
        <div>
          <input type="text" />
          {/* Utilizar o resultado do input par começar proxima operação*/}
          <ul>
            {calculator.map((elem, index) => (
              <li key={index}>
                <button>{elem}</button>
              </li>
            ))}
          </ul>
        </div>
      </CalculatorSection>
    </>
  );
};
