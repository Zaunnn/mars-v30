import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100vh;
  display: grid;
  align-items: end;
  background: #d4f1f4;
  padding: 0;
`;
export const HeroBg = styled.svg`
  position: absolute;
  fill: aqua;
  height: 100vh;
  width: 99vw;
  z-index: 1;
`;

export const HeroWrapper = styled.div`
  height: 93vh;
  width: 100%auto;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  display: grid;
  align-items: center;
  padding: 0;
`;

export const HeroRow = styled.div`
  display: grid;
  width: 98vw;
  height: 100%;
  grid-template-columns: minmax(auto, 50vw);
  align-items: center;
  grid-template-areas: "col1 col2";
  overflow: hidden;
  @media (max-width: 868px) {
    grid-template-areas: "col1" "col2";
    grid-template-columns: minmax(auto, 800px);
    justify-content: center;
  }
  @media (max-width: 800px) {
    grid-template-columns: minmax(auto, 700px);
  }
  @media (max-width: 700px) {
    grid-template-columns: minmax(auto, 600px);
  }
  @media (max-width: 600px) {
    grid-template-columns: minmax(auto, 500px);
  }
  @media (max-width: 500px) {
    grid-template-columns: minmax(auto, 400px);
  }
  @media (max-width: 400px) {
    grid-template-columns: minmax(auto, 360px);
  }
`;
export const Column1 = styled.div`
  grid-area: col1;
  display: grid;
  align-self: start;
  padding: 0;
  overflow: hidden;
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  margin-left: 50px;
  margin-top: 50px;

  @media (max-width: 868px) {
    margin: 10px auto 0 auto;
    display: grid;
    justify-content: center;
    max-width: 90vw;
    padding: 0;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
  max-width: 750px;
  display: grid;
  justify-content: center;
  margin-left: 5px;
  overflow: hidden;

  @media (max-width: 868px) {
    max-width: 400px;
  }
  @media (max-width: 500px) {
    max-width: 350px;
  }
`;
export const Img = styled.img`
  width: 100%;
  padding: 0;
  justify-self: center;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: uppercase;
  margin-bottom: 16px;
  @media (max-width: 868px) {
    justify-self: center;
    margin-bottom: 7px;
    font-size: 0.85rem;
  }
`;

export const Heading = styled.h1`
  color: black;
  font-size: 80px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 24px;
  font-weight: 600;
  @media (max-width: 1710px) {
    font-size: 70px;
  }
  @media (max-width: 1510px) {
    font-size: 60px;
  }
  @media (max-width: 1310px) {
    font-size: 55px;
  }
  @media (max-width: 1210px) {
    font-size: 50px;
  }
  @media (max-width: 1100px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 868px) {
    text-align: center;
    font-size: 45px;
    margin-bottom: 5px;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-size: 35px;
    margin-bottom: 10px;
    line-height: 1.3;
  }
  @media (max-width: 390px) {
    font-size: 30px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 35px;
  max-width: 550px;
  @media (max-width: 868px) {
    margin: 20px auto;
    font-size: 16px;
    max-width: 430px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    max-width: 320px;
  }
`;
export const BtnWrapper = styled.div`
  display: grid;
  justify-content: center;
  margin-left: 50px;
  margin-top: 50px;
  max-width: 750px;
  @media (max-width: 868px) {
    display: none;
  }
`;

export const Btn2Wrapper = styled.div`
  display: none;
  @media (max-width: 868px) {
    display: grid;
    margin: 20px 5px 100px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
