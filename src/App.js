import React from "react";
import styled from "styled-components";
import { Theme, GlobalStyle } from "./style";
import foods from "./data";
import FoodsContainer from "./components/FoodsContainer";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function App() {
  return (
    <Theme>
      <GlobalStyle />
      <StyledContainer>
        <FoodsContainer foods={foods} />
      </StyledContainer>
    </Theme>
  );
}
