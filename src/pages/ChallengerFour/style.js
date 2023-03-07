import styled from "styled-components";

export const ChallengerFourSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > form {
    margin: 30px 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 80%;

    > input {
      height: 30px;
      border: none;
      border-radius: 10px;
      background-color: var(--blue-1);
      padding: 10px;
    }

    > button {
      height: 30px;
      border: none;
      border-radius: 10px;
      background-color: var(--purple);
      color: var(--blue-1);
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 290px;
    max-height: 80vh;
    overflow-y: auto;
    background-color: var(--blue-4);
    padding: 20px;
    border-radius: 10px;
    gap: 10px;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--purple);
    }

    > h2 {
      align-self: center;
      color: var(--black);
    }
  }
`;

export const TodoLi = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.checked ? "var(--green)" : "var(--blue-3)")};
  padding: 5px;
  border-radius: 10px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "underline")};

  > div {
    display: flex;
    gap: 5px;
    width: 90%;

    > input {
      cursor: pointer;
    }

    > p {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
