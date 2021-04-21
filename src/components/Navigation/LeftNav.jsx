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
    padding: 5px 0;
    font-size: 55px;
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

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

  // background: linear-gradient(
  //   to right,
  //   rgba(255, 51, 0, 1) 0%,
  //   rgba(247, 223, 181, 0.9) 75%,
  //   rgba(255, 255, 255, 0) 100%
  // );

  background: rgb(255, 89, 11);
  background: linear-gradient(
    90deg,
    rgba(255, 89, 11, 1) 0%,
    rgba(255, 91, 11, 0.9725023798581933) 15%,
    rgba(255, 98, 11, 0.9528945367209384) 27%,
    rgba(255, 103, 10, 0.8548553210346639) 37%,
    rgba(255, 113, 9, 0.75401498490021) 47%,
    rgba(255, 125, 8, 0.65) 55%,
    rgba(255, 140, 7, 0.55) 64%,
    rgba(255, 145, 7, 0.45) 72%,
    rgba(255, 150, 6, 0.35) 79%,
    rgba(255, 168, 5, 0.24981330422794112) 85%,
    rgba(255, 172, 5, 0.14337072719712884) 90%,
    rgba(255, 202, 2, 0.04813263195903361) 95%,
    rgba(255, 222, 0, 0) 100%
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
  // transition: transform 0.07s ease-in-out;
  transition: opacity 0 500ms cubic-bezier(0, .61, .28, .92), visibility 0s 500ms, transform 0 900ms;

  @media (max-width: 600px) {
    width: 100%;
    background: rgb(255, 89, 11);
    background: linear-gradient(
      90deg,
      rgba(255, 89, 11, 1) 0%,
      rgba(255, 91, 11, 0.9725023798581933) 15%,
      rgba(255, 98, 11, 0.9528945367209384) 27%,
      rgba(255, 103, 10, 0.8548553210346639) 39%,
      rgba(255, 113, 9, 0.75401498490021) 53%,
      rgba(255, 125, 8, 0.65) 72%,
      rgba(255, 140, 7, 0.55) 86%,
      rgba(255, 145, 7, 0.45) 100%
    );
    li{
    font-size: 44px;
    }

  }
`;

const Di = styled.div`
  max-width: 320px;
  :hover,
  :active {
    color: #000;
  }
`;
const LeftNav = ({ open, close, academicsPath, isValid }) => {
  return (
    <Aux>
      <Backdrop show={open} clicked={close} />
      <div>
        <Ul open={open}>
          <Link style={{ textDecoration: "none" }} to="/" onClick={close}>
            <li>
              <Di>Home</Di>
            </li>
          </Link>
          <Accordion academicsPath={academicsPath} isValid={isValid} onClick={close} />
          <Link style={{ textDecoration: "none" }} to="/about" onClick={close}>
            <li>
              <Di>About</Di>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            to="/contact-us"
            onClick={close}
          >
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
