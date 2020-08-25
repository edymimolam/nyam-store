import { createGlobalStyle } from "styled-components";
import backgroundPattern from "../assets/background-pattern.png";
import exoThin from "../assets/Exo2.0-Thin.otf";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 62.5%;
}

@font-face {
    font-family: Exo;
    font-style: normal;
    font-weight: 100;
    src: url(${exoThin});
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: 
    ${({ theme: { gradients } }) => gradients.mainBackground}
    url(${backgroundPattern});
  font-size: 1.6rem;
  font-family: ${({ theme: { fonts } }) => fonts.main};
  color: ${({ theme: { colors } }) => colors.font.bright};
}

#root{
  height: 100%
}
`;
export default GlobalStyle;
