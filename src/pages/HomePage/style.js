import styled from "styled-components";

export const HomePageSection = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  gap: 20px;

  > h1 {
    color: var(--purple);
    font-size: 10vw;
    font-weight: bold;
  }

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 60vw;
    max-width: 400px;
    padding: 15px 0;
    gap: 10px;
    background-color: var(--blue-3);
    border-radius: 10px;

    > li {
      background-color: var(--blue-4);
      padding: 15px;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: var(--purple);
      }

      > p {
        color: var(--blue-1);
      }
    }
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 76px;
    }
  }
`;
