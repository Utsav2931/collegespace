import React from "react";
import styled from "styled-components";
import Accordion from "./MenuList/List";
import { Link } from "react-router-dom";


const Ul = styled.ul`
  display: flex;
  li {
    color: #fff;
    list-style-type: none;
    margin: 0;
    padding: 18px 0;
    font-size: 50px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none;
  }

  li a {
    text-decoration: none;
    color: white;
  }
  li a:hover,
  li a:active {
    color: #000;
  }
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  overflow: auto;

  flex-flow: column nowrap;
  background: linear-gradient(
    to right,
    rgba(255, 51, 0, 1) 0%,
    rgba(247, 223, 181, 0.9) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  margin: auto;
  padding: auto;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  padding-top: 7.5rem;
  transition: transform 0.1s ease-in-out;
`;

const LeftNav = ({ open }) => {
  return (
    <div>
      <Ul open={open}>
        <Link to="/"><li>Home</li></Link>
        <Accordion />
        <Link to='/about'><li >About</li></Link>
        <Link to='/contact-us'><li >Contact Us</li></Link>
      </Ul>
    </div>
  );
};

export default LeftNav;
