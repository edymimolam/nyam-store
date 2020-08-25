import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  fonts: {
    main: "Trebuchet MS, sans-serif;",
    decorative: "Exo, serif",
  },
  fontSizes: {
    xs: "1.3rem", // 13px
    s: "1.4rem", // 14px
    m: "1.6rem", // 16px
    l: "2.1rem", // 21px
    xl: "2.4rem", // 24px
    xxl: "3.6rem", //36px
    xxxl: "4.2rem", //42px
    xxxxl: "4.8rem", //48px
  },
  fontWeights: {
    thin: "100",
    regular: "400",
    bold: "700",
  },
  colors: {
    main: "#1698D9",
    mainLight: "#2EA8E6",
    accent: "#D91667",
    accentLight: "#E52E7A",
    faded: "#B3B3B3",
    bright: "#FFFFFF",
    font: {
      bright: "#FFFFFF",
      pale: "#666666",
      dark: "#000000",
      info: "#FFFF66",
      faded: "#B3B3B3",
    },
  },
  gradients: {
    mainBackground:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%),",
  },
  mediaQueries: {
    tablet: "only screen and (max-width: 1024px)",
    phone: "only screen and (max-width: 700px)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
