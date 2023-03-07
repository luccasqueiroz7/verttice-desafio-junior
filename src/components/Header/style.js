import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--purple);
  margin-bottom: 20px;

  > h1 {
    font-size: 26px;
  }

  > button {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--grey-1);
    color: var(--grey-4);
    font-weight: 600;

    &:hover {
      background-color: var(--blue-4);
    }
  }

  @media (min-width: 768px) {
    > h1 {
      font-size: 36px;
    }
  }
`;
