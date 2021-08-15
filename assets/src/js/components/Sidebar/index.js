import React from "react";
// import { Button } from "../Button.js";
import {
  SideBarContainer,
  SideBarMenu,
  SideBarItem,
  CloseIcon,
  Button,
  CloseIconWrapepr,
} from "./SidebarElements.js";

export const Sidebar = ({ isOpen, handleClick }) => {
  return (
    <>
      <SideBarContainer onClick={handleClick} isOpen={isOpen}>
        <CloseIconWrapepr>
          <CloseIcon />
        </CloseIconWrapepr>
        <SideBarMenu>
          <SideBarItem onClick={handleClick}>Home</SideBarItem>
          <SideBarItem onClick={handleClick}>Services</SideBarItem>
          <SideBarItem onClick={handleClick}>About</SideBarItem>
          <SideBarItem onClick={handleClick}>
            {" "}
            <Button onClick={handleClick}>Sign up</Button>
          </SideBarItem>
        </SideBarMenu>
        {/* <ButtonWrapper></ButtonWrapper> */}
      </SideBarContainer>
    </>
  );
};
