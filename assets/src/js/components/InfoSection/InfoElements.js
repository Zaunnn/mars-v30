import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 800px;
  width: 99vw;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: aqua;
  overflow-x: hidden;
  @media (max-width: 868px) {
    height: 1000px;
  }
  @media (max-width: 480px) {
    height: 1600px;
  }
`;
export const SectionWrapper = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 90vw;
  margin: 0 20px;
`;

export const Heading = styled.h1`
  font-size: 35px;
  padding: 0;
  text-align: center;
  margin: 50px;

  @media (max-width: 868px) {
    font-size: 32px;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-areas: "part1 part2 part3";
  grid-template-rows: minmax(auto, 1fr);
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 868px) {
    grid-template-areas: "part1" "part2" "part3";
  }
  @media (max-width: 868px) {
    grid-template-rows: minmax(auto, 250px);
  }
  @media (max-width: 486px) {
    align-items: center;
    /* grid-template-rows: repeat(4, 450px); */
    justify-content: center;
  }
`;

export const Column = styled.div`
  grid-area: ${({ Area }) => Area};
  width: 400px;
  height: 600px;
  display: grid;
  justify-content: center;
  grid-template-rows: 250px;
  margin: 0 20px;
  background: #d4f1f4;
  border-radius: 50px;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
  @media (max-width: 1400px) {
    width: auto;
  }
  @media (max-width: 1100px) {
    width: auto;
  }
  @media (max-width: 868px) {
    grid-template-columns: 45vw 45vw;
    height: auto;
    width: 90vw;
    /* justify-content: space-evenly; */
    margin: 30px 0;
  }
  @media (max-width: 480px) {
    grid-template-columns: 70vw;
    margin: 20px 0;
    height: 455px;
    justify-self: center;
  }
`;

export const TextWrapper = styled.div`
  padding: 0;
  margin-top: 5px;
  font-size: 10px;
  max-height: 200px;
  align-self: center;
  margin: 20px;
  @media (min-width: 868px) {
    align-self: start;
  }
  @media (max-width: 868px) {
    margin: 0 20px;
  }
`;

export const ColumnH1 = styled.h1`
  font-size: 2.5em;
  padding: 0;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 1400px) {
    font-size: 2.3em;
  }
  @media (max-width: 1110px) {
    font-size: 2.2em;
  }
`;

export const ColumnP = styled.p`
  font-size: 2em;
  padding: 0;
  text-align: center;
  margin: 15px;
  @media (max-width: 1400px) {
    font-size: 1.7em;
  }
  @media (max-width: 1110px) {
    font-size: 1.5em;
    align-self: center;
  }
  @media (max-width: 480px) {
    /* width: 150px; */
    max-height: 108px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 300px;
  display: grid;
  align-items: center;
  justify-self: center;
  align-self: center;
  justify-content: center;
  @media (max-width: 480px) {
    align-self: flex-end;
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  @media (max-width: 1110px) {
    width: 250px;
  }
`;
