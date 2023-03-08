import styled from "styled-components";

export const ChallengerOneSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > form > input {
    width: 80vw;
    max-width: 340px;
    padding: 15px;
    border: none;
    border-radius: 5px;
  }

  > ul {
    width: 80vw;
    max-width: 340px;
    background-color: var(--blue-3);
    padding: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    > h2 {
      font-size: 18px;
    }

    > li {
      background-color: var(--blue-1);
      padding: 10px;
      border-radius: 5px;
    }
  }

  @media (min-width: 425px) {
    > ul > h2 {
      font-size: 24px;
    }
  }
`;
