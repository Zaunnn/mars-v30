import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
export const Container = styled.div`
  /* display: one; */
  /* left: ${({ isSignOpen }) => (isSignOpen ? "5vh" : "-100%")};
   */

  /* display: ${({ isSignOpen }) => (isSignOpen ? "grid" : "none")};
  opacity: ${({ isSignOpen }) => (isSignOpen ? "100%" : "0%")}; */

  position: fixed;
  z-index: 3;
  height: 800px;
  width: 510px;
  display: grid;
  align-self: center;
  justify-self: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 50px; */
`;
export const Tabs = styled.div`
  height: 50px;
  width: 100%;
  background: black;
`;
export const Icon = styled.img`
  max-height: 100px;
  max-width: 100px;
  justify-self: center;
  margin: 20px;
`;

export const Form = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: stretch;
  align-self: center;
  gap: 10px;
`;
export const Header = styled.h1`
  font-size: 20px;
  justify-self: center;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 400px;
  margin: 5px 0;
  @media (max-width: 480px) {
    width: 300px;
    justify-self: center;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #c5c7c9;
  border-radius: 6px;
  outline: none;
  padding: 6px 8px;
  font-family: "Soleil", "Encode Sans Expanded", sans-serif;
  font-size: 18px;
  text-decoration: none;
  &:focus ~ div,
  &:not(:placeholder-shown)&:not(:focus) ~ div {
    transform: scale(0.75) translatey(-147%);
    left: -2px;
    background: white;
    padding: 0 6px;
  }
  &:focus {
    border: 2px solid #1a73e8;
  }
`;
export const InputLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: #5f6368;
  padding: 0 6px;
  font-size: 18px;
  cursor: text;
  transition: all 100ms linear;
`;

export const Input2Wrapper = styled.div`
  display: flex;
  width: 416px;
  @media (max-width: 480px) {
    position: relative;
    margin: 5px 0;
    width: 305px;
    justify-self: center;
  }
`;

export const Input2 = styled.input`
  height: 30px;
  width: 192px;
  padding: 6px 8px;
  margin-right: 0;
  border: 1px solid #c5c7c9;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background: transparent;
  outline: none;
  font-family: "Soleil", "Encode Sans Expanded", sans-serif;
  font-size: 18px;
  &:focus ~ div,
  &:not(:placeholder-shown)&:not(:focus) ~ div {
    transform: scale(0.75) translatey(-147%);
    left: -2px;
    background: white;
    padding: 0 6px;
  }
  &:focus {
    border: 2px solid #1a73e8;
  }
  @media (max-width: 480px) {
    width: 142px;
  }
`;

export const Input3 = styled.input`
  height: 30px;
  width: 192px;
  padding: 6px 8px;
  margin-left: 0;
  border: 1px solid #c5c7c9;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: transparent;
  outline: none;
  font-family: "Soleil", "Encode Sans Expanded", sans-serif;
  font-size: 18px;
  &:focus ~ div,
  &:not(:placeholder-shown)&:not(:focus) ~ div {
    transform: scale(0.75) translatey(-147%);
    left: -2px;
    background: white;
    padding: 0 6px;
  }
  &:focus {
    border: 2px solid #1a73e8;
  }
  @media (max-width: 480px) {
    width: 142px;
  }
`;

export const Btn = styled.button`
  border-radius: 6px;
  height: 42px;
  width: 420px;
  background: black;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 300px;
    justify-self: center;
  }
`;

export const PolicyText = styled.p`
  color: #999999;
  font-size: 13px;
  justify-self: center;
`;
export const DateInputWrapper = styled.div`
  @media (max-width: 480px) {
    justify-self: center;
  }
`;

export const GoToLogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const GoToLogInText = styled.p`
  font-size: 16px;
  color: #727272;
  margin-right: 5px;
`;

export const GoToLogInLink = styled.a`
  font-size: 16px;
  color: #000000;
  align-self: center;
  cursor: pointer;
`;

export const LevelDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #d4f1f4;
  border-radius: 5px;
  padding: 5px 13px 5px 5px;
  margin: 5px;
`;
export const LevelH1 = styled.h1`
  font-size: 15px;
  margin: 0;
  padding: 0;
`;
export const LevelButton = styled(RiCloseLine)`
  cursor: pointer;
  font-size: 20px;
  padding-bottom: 3px;
  padding-left: 0;
  margin-right: 5px;
`;
export const LevelBtutton = styled.div`
  cursor: pointer;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 0;
  margin: 5px;
`;
