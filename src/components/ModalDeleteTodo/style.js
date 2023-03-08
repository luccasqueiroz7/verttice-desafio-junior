import styled from "styled-components";

export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 20px;

  > h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--blue-3);
    border-radius: 4px 4px 0px 0px;
    width: 90vw;
    max-width: 369px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: var(--black);
    padding: 12px 0;
  }

  > h2 > p {
    padding-left: 3vw;
  }

  > h2 > button {
    background: var(--blue-3);
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    color: var(--black);
    padding-right: 3vw;
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    max-width: 369px;
    margin: 0 auto;
    background: var(--blue-2);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgb(0 0 0 / 25%);
    border-radius: 0 0 3px 3px;
    gap: 15px;
    padding: 42px 0;

    > button {
      background: var(--purple);
      border: 1.2182px solid var(--purple);
      border-radius: 4.06066px;
      font-size: 12.8347px;
      font-weight: 600;
      line-height: 21px;
      color: var(--white);
      height: 40px;
      width: 84vw;
      max-width: 329px;
    }
  }
`;
