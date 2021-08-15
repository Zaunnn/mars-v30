import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  Part1,
  Part2,
  TextWrapper,
  HeadLine,
  TopLine,
  Paragraph,
  ButtonWrapper,
  ImgWrapper,
  Img,
} from "./StartElements";
import { Button } from "../Button";

export const StartSection = ({
  id,
  BackgroundColor,
  TextFirst,
  TopLineColor,
  HeadLineColor,
  ParagraphColor,
  ButtonBackgroundColor,
  ButtonTextColor,
  ButtonLabel,
  ImgSrc,
  topLine,
  headLine,
  paragraph,
  ButtonHoverBackgroundColor,
}) => {
  return (
    <>
      <SectionContainer id={id} BackgroundColor={BackgroundColor}>
        <SectionWrapper TextFirst={TextFirst}>
          <Part1>
            <TextWrapper>
              <TopLine TopLineColor={TopLineColor}>{topLine}</TopLine>
              <HeadLine HeadLineColor={HeadLineColor}>{headLine}</HeadLine>
              <Paragraph ParagraphColor={ParagraphColor}>{paragraph}</Paragraph>
            </TextWrapper>
            <ButtonWrapper>
              <Button
                ButtonTextColor={ButtonTextColor}
                ButtonBackgroundColor={ButtonBackgroundColor}
                ButtonHoverBackgroundColor={ButtonHoverBackgroundColor}
              >
                {ButtonLabel}
              </Button>
            </ButtonWrapper>
          </Part1>
          <Part2>
            <ImgWrapper>
              <Img src={ImgSrc} />
            </ImgWrapper>
          </Part2>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};
