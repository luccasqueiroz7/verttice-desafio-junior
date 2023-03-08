import styled from "styled-components";

export const CalculatorSection = styled.section`
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 200px;
    padding: 20px 10px 30px;
    background-color: var(--grey-3);
    border-radius: 10px;
    gap: 15px;

    div {
      display: flex;
      flex-direction: column;
      gap: 0px;
      > .clearCalculator {
        display: flex;
        align-self: flex-end;
        background-color: var(--black);
        color: var(--white);
        padding: 5px;
        border-radius: 5px;
        margin-bottom: 10px;
        font-weight: 600;
      }
      > input,
      .inputFirstNumber {
        height: 30px;
        border-radius: 0 0 4px 4px;
        border: none;
        text-align: end;
        padding: 10px 5px;
      }

      > .inputFirstNumber {
        background-color: var(--white);
        border-radius: 4px 4px 0 0;
      }
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
          color: var(--white);
          font-size: 20px;
        }
      }
    }
  }
`;

export const KeysLi = styled.li`
  > button {
    background-color: ${(props) => (props.keyColor ? "var(--black)" : "var(--purple)")};
  }
`;
