import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui;
  }
`;
