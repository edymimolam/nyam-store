import React from "react";
import styled from "styled-components";
import Food from "./Food";

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StyledMainTitle = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.decorative};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.thin};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  margin: 2.5rem 0;
  text-align: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 120rem;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 80rem;
  }
  @media ${({ theme }) => theme.mediaQueries.phone} {
    width: 32rem;
  }
`;

export default function FoodsContainer({ foods }) {
  return (
    <StyledWrapper>
      <StyledMainTitle>Ты сегодня покормил кота?</StyledMainTitle>
      <StyledContainer>
        {foods.map((food) => (
          <Food key={food.id} food={food} />
        ))}
      </StyledContainer>
    </StyledWrapper>
  );
}
