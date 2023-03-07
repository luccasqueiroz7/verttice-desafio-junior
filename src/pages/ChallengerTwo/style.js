import styled from "styled-components";

export const ChallengerTwoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  > ul {
    background-color: var(--blue-4);
    padding: 15px;
    display: flex;
    overflow: auto;
    gap: 10px;
    width: 90%;
    max-width: 500px;

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      height: 6px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--purple);
    }

    > li {
      background-color: var(--blue-3);
      padding: 10px;
      border-radius: 10px;

      > p {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  > button {
    width: fit-content;
    padding: 15px;
    border: none;
    border-radius: 10px;

    :hover {
      background-color: var(--purple);
      color: var(--grey-1);
    }
  }

  > p {
    font-weight: 600;
  }
`;
