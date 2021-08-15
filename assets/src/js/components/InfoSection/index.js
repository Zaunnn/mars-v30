import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  Heading,
  SectionGrid,
  Column,
  ImgWrapper,
  Img,
  TextWrapper,
  ColumnH1,
  ColumnP,
  HeadingWrapper,
} from "./InfoElements";

export const InfoSection = () => {
  return (
    <>
      <SectionContainer id="InfoSection">
        <SectionWrapper>
          {/* <Heading>Why This Website Works</Heading> */}
          <SectionGrid>
            <Column Area={"part1"}>
              <ImgWrapper>
                <Img src={"static/src/images/bitcoin.svg"} />
              </ImgWrapper>
              <TextWrapper>
                <ColumnH1>Personalized Learning</ColumnH1>
                <ColumnP>
                  Students practice at their own pace, first filling in gaps in
                  their understanding and then accelerating their learning.
                </ColumnP>
              </TextWrapper>
            </Column>
            <Column Area={"part2"}>
              <ImgWrapper>
                <Img src={"static/src/images/iot.svg"} />
              </ImgWrapper>
              <TextWrapper>
                <ColumnH1>Trusted Content</ColumnH1>
                <ColumnP>
                  Created by experts,library of trusted practice and lessons
                  covers math, science, and more. Always free for learners and
                  teachers.
                </ColumnP>
              </TextWrapper>
            </Column>
            <Column Area={"part3"}>
              <ImgWrapper>
                <Img src={"static/src/images/coding.svg"} />
              </ImgWrapper>
              <TextWrapper>
                <ColumnH1>Tools to Empower</ColumnH1>
                <ColumnP>
                  Teachers can identify gaps in their students’ understanding,
                  tailor instruction, and meet the needs of every student.
                </ColumnP>
              </TextWrapper>
            </Column>
          </SectionGrid>
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};
