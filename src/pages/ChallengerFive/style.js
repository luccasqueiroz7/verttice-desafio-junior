import styled from "styled-components";

export const CalculatorSection = styled.section`
  display: flex;
  justify-content: center;

  // Adicionar box-shadow
  // Adicionar classname
  > div {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 200px;
    padding: 30px 10px;
    background-color: var(--grey-3);
    border-radius: 10px;
    gap: 15px;

    > input {
      height: 30px;
      padding: 10px 5px;
      border-radius: 4px;
    }

    > ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 5px;

      > li {
        display: flex;
        justify-content: center;
        width: 22%;
        border-radius: 4px;

        > button {
          width: 100%;
          padding: 4px 2px;
          background-color: var(--black);
          color: var(--white);
          font-size: 20px;
        }
      }
    }
  }
`;
