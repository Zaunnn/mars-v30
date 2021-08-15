import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 700px;
  background: ${({ BackgroundColor }) => BackgroundColor};
  display: grid;
  align-items: center;
  justify-content: center;
  @media (max-width: 868px) {
    height: 1000px;
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-areas: ${({ TextFirst }) =>
    TextFirst ? `"part1 part2"` : `"part2 part1"`};
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(auto, auto);

  @media (max-width: 868px) {
    grid-template-areas: "part1" "part2";
  }
`;

export const Part1 = styled.div`
  grid-area: part1;
  margin: 30px;
`;
export const Part2 = styled.div`
  grid-area: part2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  /* margin: 50px; */
`;

export const TopLine = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-decoration: uppercase;
  color: ${({ TopLineColor }) => TopLineColor};
`;

export const HeadLine = styled.h1`
  font-size: 48px;
  margin: 22px 0;
  color: ${({ HeadLineColor }) => HeadLineColor};
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Paragraph = styled.p`
  max-width: 440px;
  font-size: 18px;
  color: ${({ ParagraphColor }) => ParagraphColor};
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`;
export const ImgWrapper = styled.div``;

export const Img = styled.img`
  width: 420px;
  justify-self: center;
  margin: 30px;

  @media (max-width: 480px) {
    margin-left: 0;
  }
  @media (max-width: 420px) {
    width: 360px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
