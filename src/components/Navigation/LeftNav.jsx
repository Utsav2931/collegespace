import React from "react";
import styled from "styled-components";
import Accordion from "./MenuList/List";
import { Link } from "react-router-dom";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Aux from "../../hoc/AAux";

const Ul = styled.ul`
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

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  

  background: linear-gradient(
    to right,
    rgba(255, 51, 0, 1) 0%,
    rgba(247, 223, 181, 0.9) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  overflow: auto;

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

const Di = styled.div`
  max-width: 320px;
  :hover,
  :active {
    color: #000;
  }
 
  
`;
const LeftNav = ({ open, close, academicsPath },) => {
  return (
    <Aux>
      <Backdrop show={open} clicked={close} />
      <div>
        <Ul open={open}>
          <Link style={{ textDecoration: "none" }} to="/" onClick={close}>
            <li>
              <Di>home</Di>
            </li>
          </Link>
          <Accordion academicsPath={academicsPath} onClick={close} />
          <Link style={{ textDecoration: "none" }} to="/about" onClick={close}>
            <li>
              <Di>About</Di>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact-us" onClick={close}>
            <li>
              <Di>Contact Us</Di>
            </li>
          </Link>
        </Ul>
      </div>
    </Aux>
  );
};

export default LeftNav;
