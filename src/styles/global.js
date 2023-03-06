import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--blue-2);
`;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    ul,ol,li{
        list-style: none;
    }
    button {
        outline: none;
        cursor: pointer;
    }
    body {
        min-width: 100vw;
        min-height: 100vh;
    }
    :root {
        --white:  #fbfcfd;
        --grey-1: #a4a9ad;
        --grey-3: #666666;
        --grey-4: #343b41;
        --black:  #000000;
        --blue-1: #d3e1f1;
        --blue-2: #a1c3ed;
        --blue-3: #6aa0e3;
        --blue-4: #4178bc;
        --pink: #ff577f;
    }
`;
