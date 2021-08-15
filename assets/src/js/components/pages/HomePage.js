import React, { useState } from "react";
import { Navbar } from "../navbar/index";
import { HeroSection } from "../HeroSection/index";
import { InfoSection as Info } from "../Sect/index";
import { HomeObjOne, HomeObjTwo, HomeObjThree } from "../Sect/Data";
import { InfoSection } from "../InfoSection/index";
import { StartSection } from "../StartSection";
import {
  SectionOneProps,
  SectionTwoProps,
  SectionThreeProps,
} from "../StartSection/Props";
import FooterSection from "../FooterSection";
import { StorySection } from "../StorySection";
import { SectionOne, SectionTwo } from "../StorySection/Props";
import { Sidebar } from "../Sidebar";
import { Sign } from "../Sign";
export const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isSignOpen, setIsSignOpen] = useState(true);
  const handleSignClick = () => {
    // setIsSignOpen(!isSignOpen);
  };
  return (
    <div>
      <Navbar
        isOpen={isOpen}
        handleClick={handleClick}
        handleSignClick={handleSignClick}
      />
      <Sidebar isOpen={isOpen} handleClick={handleClick} />
      <Sign isSignOpen={isSignOpen} handleSignClick={handleSignClick} />
      <HeroSection />
      <InfoSection />
      <StorySection {...SectionOne} />
      <StartSection {...SectionOneProps} />
      <StartSection {...SectionTwoProps} />
      <StartSection {...SectionThreeProps} />
      <StorySection {...SectionTwo} />
      <FooterSection />
    </div>
  );
};
