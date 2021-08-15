import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavbarIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  NavbarBtnWrapper,
  SignUpButton,
  LoginButton,
  BarMenu,
} from "./NavbarElements";
import { FaBars, FaWindows } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export const Navbar = ({ handleClick, handleSignClick }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const editNavbar = () => {
    if (window.scrollY >= 120) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", editNavbar);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav isScrolling={isScrolling}>
      <NavbarContainer>
        <NavbarIcon
          src={"static/src/images/favicon.svg"}
          onClick={toggleHome}
        />
        <BarMenu onClick={handleClick}>
          <FaBars />
        </BarMenu>
        <NavbarMenu>
          <NavbarItem>
            <NavbarLink
              to="InfoSection"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Discover
            </NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink
              to="StorySectionOne"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Opinions
            </NavbarLink>
          </NavbarItem>

          <NavbarItem>
            <NavbarLink
              to="StorySectionTwo"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              About
            </NavbarLink>
          </NavbarItem>

          <NavbarBtnWrapper>
            <SignUpButton onClick={handleSignClick}> Sign up</SignUpButton>
            <LoginButton>Login</LoginButton>
          </NavbarBtnWrapper>
        </NavbarMenu>
      </NavbarContainer>
    </Nav>
  );
};
