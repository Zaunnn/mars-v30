import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import React, { useState } from "react";
import { Link } from "react-scroll";

export const ArrowForward = styled(MdArrowForward)`
  font-size: 22px;
  margin-left: 15px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 22px;
  margin-left: 10px;
`;

export const Btn = ({ children, className }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <button
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={className}
    >
      {children} {hover ? <ArrowForward /> : <ArrowRight />}{" "}
    </button>
  );
};

export const Button = styled(Btn)`
  border-radius: 50px;
  background: ${({ ButtonBackgroundColor }) => ButtonBackgroundColor};
  color: ${({ ButtonTextcolor }) => ButtonTextcolor};
  padding: 14px 48px;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  cursor: pointer;
  margin: 7px;
  @media (max-width: 1100px) {
    padding: 12px 38px;
  }
  @media (max-width: 920px) {
    padding: 10px 32px;
    font-size: 17px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ ButtonHoverBackgroundColor }) =>
      ButtonHoverBackgroundColor};
    transform: scale(1.1);
  }
`;
