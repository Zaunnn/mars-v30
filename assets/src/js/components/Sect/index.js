import React from "react";
import {
  InfoContainer,
  InfoRow,
  TextWrapper,
  InfoWrapper,
  Column1,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
} from "./InfoElements";
import { Button } from "../../components/Button";
export const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  heading,
  darkText,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  description,
}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle darkText={darkText}>{description} </Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}{" "}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};
