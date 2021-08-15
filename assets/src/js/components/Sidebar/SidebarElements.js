import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 3;
  display: grid;
  grid-template-rows: 80px auto;
  width: 86vw;
  height: 70vh;
  background: black;
  align-items: space-evenly;
  /* justify-content: center; */
  transition: 0.2s ease-in-out;
  border-radius: 15px;
  top: ${({ isOpen }) => (isOpen ? "7vh" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  left: 7%;
`;
export const CloseIconWrapepr = styled.div`
  display: grid;
  align-items: center;
  justify-content: end;
  margin: 20px;
`;

export const CloseIcon = styled(FaTimes)`
  /* right: 50px; */

  /* position: absolute; */
  /* right: 50px; */
  color: white;
  font-size: 30px;
`;
export const SideBarMenu = styled.div`
  display: grid;
  align-items: space-evenly;
  justify-content: center;
  font-size: 80px;
  margin-bottom: 50px;
`;
export const SideBarItem = styled.div`
  font-size: 0.3em;
  color: #fff;
  margin: 20px;
  display: grid;
  justify-content: center;
  justify-self: center;
`;
export const ButtonWrapper = styled.div`
  /* height: %; */
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 0 30px;
  font-size: 15px;
  background: #75e6da;
  border: none;
  outline: none;
  border-radius: 50px;
`;
