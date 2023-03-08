import { useState } from "react";
import { Header } from "../../components/Header";
import { CalculatorSection, KeysLi } from "./style";

export const ChallengerFive = () => {
  const calculator = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "+",
    "=",
  ];

  const [calculatorValue, setCalculatorValue] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState("");

  function addCalculator(value) {
    if (value === "Backspace" || value === "Delete") {
      setCalculatorValue(calculatorValue.slice(0, -1));
    }
    if ((value === "." || value === ",") && calculatorValue.indexOf(".") === -1) {
      setCalculatorValue(calculatorValue + ".");
    }
    if (calculator.find((elem) => Number(elem) === Number(value))) {
      setCalculatorValue(calculatorValue + value);
    }
    if (
      ["+", "-", "*", "x", "/", "÷"].find((elem) => elem === value) &&
      calculatorValue.length > 0
    ) {
      if (firstNumber.length > 0) {
        switch (operator) {
          case "+":
            setFirstNumber(String(Number(firstNumber) + Number(calculatorValue)));
            setCalculatorValue("");
            setOperator(value);
            break;

          case "-":
            setFirstNumber(String(Number(firstNumber) - Number(calculatorValue)));
            setCalculatorValue("");
            setOperator(value);
            break;

          case "x":
          case "*":
            setFirstNumber(String(Number(firstNumber) * Number(calculatorValue)));
            setCalculatorValue("");
            setOperator(value);
            break;

          case "÷":
          case "/":
            setFirstNumber(String(Number(firstNumber) / Number(calculatorValue)));
            setCalculatorValue("");
            setOperator(value);
            break;

          default:
            break;
        }
      } else {
        setFirstNumber(calculatorValue);
        setCalculatorValue("");
        setOperator(value);
      }
    }

    if ((value === "=" || value === "Enter") && calculatorValue.length > 0) {
      switch (operator) {
        case "+":
          setCalculatorValue(String(Number(firstNumber) + Number(calculatorValue)));
          setFirstNumber("");
          setOperator("");
          break;

        case "-":
          setCalculatorValue(String(Number(firstNumber) - Number(calculatorValue)));
          setFirstNumber("");
          setOperator("");
          break;

        case "x":
        case "*":
          setCalculatorValue(String(Number(firstNumber) * Number(calculatorValue)));
          setFirstNumber("");
          setOperator("");
          break;

        case "÷":
        case "/":
          setCalculatorValue(String(Number(firstNumber) / Number(calculatorValue)));
          setFirstNumber("");
          setOperator("");
          break;

        default:
          break;
      }
    }
  }

  function clearCalculator() {
    setCalculatorValue("");
    setFirstNumber("");
    setOperator("");
  }

  return (
    <>
      <Header></Header>
      <CalculatorSection>
        <div className="calculator">
          <div>
            <button className="clearCalculator" onClick={clearCalculator}>
              Limpar
            </button>
            <div className="inputFirstNumber">
              {firstNumber} {operator}
            </div>
            <input
              type="text"
              value={calculatorValue}
              onKeyDownCapture={(e) => addCalculator(e.key)}
              readOnly
            />
          </div>
          <ul>
            {calculator.map((elem, index) => (
              <KeysLi keyColor={isNaN(elem)} key={index}>
                <button onClick={() => addCalculator(elem)}>{elem}</button>
              </KeysLi>
            ))}
          </ul>
        </div>
      </CalculatorSection>
    </>
  );
};
