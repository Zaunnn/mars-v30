import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  height: 80px;
  /* margin-top: -80px; */
  display: grid;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  /* background: black; */
  /* padding-bottom: 12.5px; */
  @media (min-width: 868px) {
    /* background: ${({ isScrolling }) =>
      isScrolling ? "#75e6da" : "transparent"}; */

    /* opacity: 0.7; */
  }
`;

export const NavbarContainer = styled.div`
  width: 98vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 868px) {
    align-items: center;
  }
`;
export const NavbarIcon = styled.img`
  height: 40px;
  width: 40px;
  justify-self: flex-start;
  align-self: center;
  margin-left: 30px;
  margin-top: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
    margin-left: 10px;
  }
`;

export const BarMenu = styled.div`
  display: none;
  @media screen and (max-width: 1050px) {
    display: block;
    /* transform: translate(-100%, 60%); */
    font-size: 2rem;
    cursor: pointer;
    color: #000;
    margin: 10px 15px 0 0;
  }
`;
export const NavbarMenu = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  list-style: none;
  align-self: center;
  @media (max-width: 1050px) {
    display: none;
  }
`;

export const NavbarItem = styled.div`
  text-decoration: none;
  margin: 0 15px;
  height: 100%;
  @media (max-width: 1050px) {
    margin: 0 10px;
  }
`;
export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #2e8bc0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 27px 0;
  font-weight: 600;

  &.active {
    border-bottom: 3px solid black;
  }
`;

export const NavbarBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin: 0 100px;

  @media (max-width: 868px) {
    display: none;
  }
  @media (max-width: 1400px) {
    margin: 70px;
  }
  @media (max-width: 1230px) {
    margin: 55px;
  }
  @media (max-width: 1150px) {
    margin: 30px;
  }
`;

export const SignUpButton = styled.button`
  border-radius: 50px;
  border: none;
  padding: 8px 20px;
  background: #0271b1;
  outline: none;
  font-size: 14px;
  text-decoration: none;
  color: black;
  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

export const LoginButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  padding: 10px 22px;
  font-size: 16px;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;
