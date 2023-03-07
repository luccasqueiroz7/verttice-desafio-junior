import styled from "styled-components";

export const ChallengerThreeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  > ul {
    background-color: var(--blue-4);
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 90%;
    max-width: 660px;

    li > button {
      border: none;
      padding: 10px;

      :hover {
        background-color: var(--purple);
        color: var(--grey-1);
      }
    }
  }
`;
