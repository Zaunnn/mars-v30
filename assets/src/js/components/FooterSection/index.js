import React from "react";
import {
  SectionContainer,
  SectionGrid,
  Part2,
  Part1,
  TopLine,
  Part1H1,
  Part1Input,
  BottomWrapper,
  LogoIcon,
  TextWrapper,
  BottomText,
  Img,
  TextWrapper2,
  TextElements,
  SmallLogo,
} from "./FooterElements";
import { Link } from "react-scroll";
const FooterSection = () => {
  return (
    <>
      <SectionContainer id="FooterSection">
        <SectionGrid>
          <Part1>
            <TextWrapper>
              <TopLine>No Credit Card Required</TopLine>
              <Part1H1>Send Us Feed Back</Part1H1>
              <Part1Input placeholder="Your Email"></Part1Input>
            </TextWrapper>
            <BottomWrapper>
              <Link
                to="HeroSection"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <LogoIcon src={"static/src/images/favicon.svg"} />{" "}
              </Link>

              <BottomText>
                With This Web Site You Can Educate Yourself In Easiest And Most
                Fun Way Possible.
              </BottomText>
            </BottomWrapper>
          </Part1>
          <Part2>
            <Img src={"static/src/images/chemistry.svg"} />

            <TextWrapper2>
              <TextElements>Terms and Conditions</TextElements>
              <TextElements>Privacy Policy</TextElements>
              <TextElements>Cookie Policy</TextElements>
              <TextElements>Lets' chat</TextElements>
              <TextElements>hi@gmail.com</TextElements>
              <TextElements>Contact us</TextElements>
              <TextElements>
                {" "}
                <SmallLogo src={"static/src/images/github.svg"} />{" "}
              </TextElements>
              <TextElements>
                {" "}
                <SmallLogo src={"static/src/images/facebook.svg"} />
              </TextElements>
              <TextElements>
                {" "}
                <SmallLogo src={"static/src/images/twitter.svg"} />
              </TextElements>
            </TextWrapper2>
          </Part2>
        </SectionGrid>
      </SectionContainer>
    </>
  );
};

export default FooterSection;
