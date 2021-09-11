import React, { useState } from "react";
import styled from "styled-components";
import LeftNav from "./LeftNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  z-index: 20;
  display: flex;
  padding: auto;
  margin: auto;
  cursor: pointer;
  justify-content: space-around;
  flex-flow: column nowrap;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#fff" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// Component to generate the burger icon
const Burger = (props) => {
  const [open, setOpen] = useState(false);

  // If the navigation is open, fixesd the position of the body(Can't scroll)
  (open || props.show)
    ? document.body.setAttribute("style", `position: fixed; left:0; right:0;`)
    : document.body.setAttribute("style", ``);

    // Display UI
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} close={() => setOpen(!open)} academicsPath={props.academicsPath} isValid={props.isValid} onclick={props.onclick}/>
    </>
  );
};

export default Burger;
