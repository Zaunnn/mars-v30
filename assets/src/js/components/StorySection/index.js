import React from "react";
import {
  PictureWrapper,
  SectionContainer,
  SectionGrid,
  Picture,
  Text,
  FamilyName,
  Name,
  InfoWrapper,
} from "./StoryElements";

export const StorySection = ({
  text,
  firstName,
  familyName,
  PictureSrc,
  id,
}) => {
  return (
    <>
      <SectionContainer id={id}>
        <SectionGrid>
          <Text>{text}</Text>
          <PictureWrapper>
            <InfoWrapper>
              <Name>{firstName}</Name>
              <FamilyName>{familyName}</FamilyName>
            </InfoWrapper>

            <Picture src={PictureSrc} />
          </PictureWrapper>
        </SectionGrid>
      </SectionContainer>
    </>
  );
};
