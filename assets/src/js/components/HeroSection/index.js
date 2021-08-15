import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  ImgWrapper,
  Img,
  TopLine,
  Heading,
  Paragraph,
  BtnWrapper,
  Btn2Wrapper,
} from "./HeroElements";
import { Button } from "../Button";
import { Link } from "react-scroll";
export const HeroSection = () => {
  return (
    <HeroContainer id="HeroSection">
      <HeroBg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 15"
        preserveAspectRatio="none"
      >
        {" "}
        <path d="M 20 11 L 20 11 L 20 8 L 20 0 L 9 0 C 13 5 9 7 9 11 L 9 11 C 11 15 15 11 20 11" />
      </HeroBg>

      <HeroWrapper>
        <HeroRow>
          <Column1>
            <TextWrapper>
              <TopLine>Exclusive Educational Platform</TopLine>
              <Heading>
                For every student,
                <br /> every classroom.
                <br /> Real results.
              </Heading>
              <Paragraph>
                We’re a nonprofit with the mission to provide a free,
                world-class education for anyone, anywhere.
              </Paragraph>
            </TextWrapper>
            <BtnWrapper>
              <Link
                to="StartSectionTwo"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                <Button
                  ButtonBackgroundColor={"#75e6da"}
                  ButtonTextcolor={"black"}
                >
                  Start Learning
                </Button>
              </Link>

              <Link
                to="StartSectionOne"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                <Button
                  ButtonBackgroundColor={"#75e6da"}
                  ButtonTextcolor={"black"}
                >
                  Start Teaching
                </Button>
              </Link>

              <Link
                to="StartSectionThree"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Button
                  ButtonBackgroundColor={"#75e6da"}
                  ButtonTextcolor={"black"}
                >
                  Start Parenting
                </Button>
              </Link>
            </BtnWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              {" "}
              <Img src={"static/src/images/chemistry.svg"} />
              <Btn2Wrapper>
                <Link
                  to="StartSectionOne"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  <Button
                    ButtonBackgroundColor={"#75e6da"}
                    ButtonTextcolor={"black"}
                  >
                    Start Now
                  </Button>
                </Link>
              </Btn2Wrapper>
            </ImgWrapper>
          </Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};
