import React from "react";
import Calc from "../components/organisms/Calc/Calc";
import { GlobalStyle } from "../styles/GlobalStyles";
import { Wrapper } from "./Root.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Calc />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
