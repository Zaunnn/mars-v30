import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 360px;
  background: aqua;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-areas: "part1 part2";
  grid-template-columns: 45vw 45vw;
  grid-template-rows: 290px;
  align-items: center;
  justify-content: center;
  @media (max-width: 878px) {
    grid-template-areas: "part1" "part2";
    grid-template-columns: 95vw;
    grid-template-rows: 150px 150px;
  }
`;

export const Part1 = styled.div`
  grid-area: part1;
  height: 100%;
  width: 100%;
  display: grid;
  margin: 10px;
  @media (max-width: 878px) {
    grid-template-columns: auto auto;
  }
`;

export const Part2 = styled.div`
  grid-area: part2;
  height: 100%;
  width: 100%;
  /* margin: 10px; */
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
`;

export const TextWrapper = styled.div``;
export const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media (max-width: 868px) {
    margin-left: 30px;
  }
`;

export const TopLine = styled.p`
  font-size: 16px;
  font-weight: 700;
  @media (max-width: 868px) {
    font-size: 13px;
  }
`;

export const Part1H1 = styled.h1`
  font-size: 35px;
  @media (max-width: 868px) {
    font-size: 21px;
  }
`;

export const Part1Input = styled.input`
  width: 40vw;
  outline: none;
  border: none;
  border-bottom: solid 1px black;
  background: transparent;
  &:focus {
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const LogoIcon = styled.img`
  width: 70px;
  cursor: pointer;
  @media (max-width: 868px) {
    justify-self: center;
    align-self: center;
  }
`;
export const BottomText = styled.p`
  font-size: 15px;
  @media (max-width: 868px) {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 10px;
  }
`;

export const Img = styled.img`
  width: 200px;
  justify-self: end;
  @media (max-width: 480px) {
    width: 100px;
  }
`;

export const TextWrapper2 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: end;
  max-height: 200px;
`;

export const TextElements = styled.p`
  font-size: 14px;
  margin: 6px;
  @media (max-width: 100px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    margin: 6px;
    font-size: 11px;
  }
`;

export const SmallLogo = styled.img`
  height: 40px;
  width: 40px;
`;
