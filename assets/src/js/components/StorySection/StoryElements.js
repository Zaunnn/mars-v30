import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 600px;
  display: grid;
  align-items: center;
  justify-content: center;
  background: #d1f3f2;
`;

export const SectionGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

export const Text = styled.p`
  font-size: 35px;
  margin: 20px 50px;
  max-width: 800px;
  @media (max-width: 868px) {
    font-size: 27px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin: 10px 25px;
  }
`;

export const PictureWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const InfoWrapper = styled.div`
  align-self: center;
`;
export const Picture = styled.img`
  height: 150px;
  border-radius: 100px;
  margin: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
`;
export const FamilyName = styled.p`
  font-size: 14px;
`;
