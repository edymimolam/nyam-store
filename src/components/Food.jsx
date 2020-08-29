import React, { useState } from "react";
import { useMoreThanOneHoverOverSelected } from "../helpers";
import styled, { css } from "styled-components";

const StyledDescription = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  color: ${({ info, theme: { colors } }) =>
    info ? colors.font.info : colors.font.bright};
  text-align: center;
  &::first-letter {
    text-transform: uppercase;
  }
  & span {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.main};
    border-bottom: 1px dashed ${({ theme: { colors } }) => colors.main};
  }
`;

const StyledBadge = styled.div`
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.font.bright};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
  line-height: ${({ theme: { fontSizes } }) => fontSizes.xxxl};
  background-color: ${({ theme: { colors } }) => colors.main};

  & span {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
    line-height: ${({ theme: { fontSizes } }) => fontSizes.l};
  }
`;

const StyledBonus = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  color: ${({ theme: { colors } }) => colors.font.pale};
`;

const StyledTaste = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  margin-bottom: 1.5rem;
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxxxl};
  margin: 0;
  text-transform: capitalize;
`;

const StyledSubTitle = styled.span`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
  color: ${({ theme: { colors }, accentLight }) =>
    accentLight ? colors.accentLight : colors.font.pale};
  margin-bottom: 0.5rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledAngle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 4rem;
  height: 4rem;
  border-top: 0.4rem solid ${({ theme: { colors } }) => colors.main};
  border-left: 0.4rem solid ${({ theme: { colors } }) => colors.main};
  border-radius: 1rem;
  clip-path: polygon(0 0, 0 3.6rem, 3.6rem 0);
`;

const StyledContainer = styled.div`
  position: relative;
  width: 32rem;
  height: 48rem;
  padding-top: 1.7rem;
  padding-left: 4.7rem;
  margin-bottom: 1.4rem;
  display: flex;
  flex-flow: column;
  background: ${({ theme: { colors } }) => colors.bright};
  border-radius: 1rem;
  border: 0.4rem solid ${({ theme: { colors } }) => colors.main};
  clip-path: polygon(4.3rem 0, 100% 0, 100% 100%, 0 100%, 0 4.3rem);
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: no-repeat left bottom url(${({ image }) => image});
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  margin-bottom: 8rem;
  color: ${({ theme: { colors } }) => colors.font.dark};
  &:hover ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.mainLight};
  }
  &:hover ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.mainLight};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.mainLight};
  }
  &:hover ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.mainLight};
  }
  &:hover ${StyledDescription} span {
    color: ${({ theme: { colors } }) => colors.mainLight};
    border-bottom: 1px dashed ${({ theme: { colors } }) => colors.mainLight};
  }
  ${({ accent }) => accent && accentMixin}
  ${({ accentHover }) => accentHover && accentHoverMixin}

  ${({ disabled }) =>
    disabled && disabledMixin}
`;

const accentMixin = css`
  ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
  }
  &:hover ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
  }
  ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
  }
  &:hover ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.accent};
  }
  ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.accent};
  }
  &:hover ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.accent};
  }
`;

const accentHoverMixin = css`
  &:hover ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.accentLight};
  }
  &:hover ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.accentLight};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.accentLight};
  }
  &:hover ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.accentLight};
  }
`;

const disabledMixin = css`
  ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
    color: ${({ theme: { colors } }) => colors.font.faded};
    cursor: initial;
  }
  ${StyledContainer}::before {
    opacity: 0.5;
  }
  &:hover ${StyledContainer} {
    border: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
  }
  ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
  }
  &:hover ${StyledAngle} {
    border-top: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
    border-left: 0.4rem solid ${({ theme: { colors } }) => colors.faded};
  }
  ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.faded};
  }
  &:hover ${StyledBadge} {
    background-color: ${({ theme: { colors } }) => colors.faded};
  }
  ${StyledSubTitle}, ${StyledBonus} {
    color: ${({ theme: { colors } }) => colors.font.faded};
  }
`;

export default function Food({
  food: {
    title,
    subTitle,
    taste,
    isAvailable,
    description,
    bonus,
    image,
    weight,
  },
}) {
  const [isSelected, setIsSelected] = useState(false);
  const [
    hoverRef,
    isMoreThanOneHoverOverSelected,
  ] = useMoreThanOneHoverOverSelected(isSelected);

  const toggleIsSelected = () => setIsSelected((isSelected) => !isSelected);

  return (
    <StyledWrapper
      accent={isSelected}
      disabled={!isAvailable}
      accentHover={isMoreThanOneHoverOverSelected}
    >
      <StyledAngle />
      <StyledContainer
        onClick={isAvailable ? toggleIsSelected : undefined}
        image={image}
        ref={hoverRef}
      >
        {isMoreThanOneHoverOverSelected ? (
          <StyledSubTitle accentLight>{subTitle.second}</StyledSubTitle>
        ) : (
          <StyledSubTitle>{subTitle.main}</StyledSubTitle>
        )}
        <StyledTitle>{title}</StyledTitle>
        <StyledTaste>{taste}</StyledTaste>
        <StyledBonus>{bonus}</StyledBonus>
        <StyledBadge>
          {weight} <span>кг</span>
        </StyledBadge>
      </StyledContainer>
      {!isAvailable && (
        <StyledDescription info>
          печалька, {taste} закончился.
        </StyledDescription>
      )}
      {isAvailable && !isSelected && (
        <StyledDescription>
          Чего сидишь? Порадуй котэ,{" "}
          <span onClick={isAvailable ? toggleIsSelected : undefined}>купи</span>
        </StyledDescription>
      )}
      {isAvailable && isSelected && (
        <StyledDescription>{description}</StyledDescription>
      )}
    </StyledWrapper>
  );
}
