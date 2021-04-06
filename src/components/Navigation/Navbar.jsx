import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import Burger from "./Burger";
import classes from "../Layout/Layout.module.css";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 45px;
  z-index: 9999;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  color: black;
  z-index: 9999;
  background-color: #ffffff;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.05);
  display: ${({ open }) => (open ? "none" : "")};

  .logo {
    width: 100%;
    text-align: center;
    padding: auto;
    margin: auto;
    color: black;
    padding-left: 70px;
    font-weight: bold;
    font-size: 20px;
  }

  .buttonStyle {
    display: ${({ nulll }) => (nulll == null ? "" : "none")};
    background-color: #ff590b;
    border: none;
    border-radius: 5px;
    width: 80px;
    padding: 8px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    margin-top: 10px;
    box-shadow: 0px 6px 18px -5px rgb(237, 133, 85);
  }

  .path {
    color: black;
    cursor: pointer;
    display: ${({ nulll }) => (nulll == null ? "none" : "")};
  }
  @media (max-width: 600px) {
    .path {
      display: none;
      color: black;
    }

    .logo {
      text-align: end;
      align-iteam: end;
    }
  }
`;

const Navbar = (props) => {
  let academicsPath = `${props.college}/${props.department}/${props.semester}`;
  return (
    <Nav open={props.show} nulll={props.college}>
      <Burger academicsPath={academicsPath} show={props.show} />
      <p className="logo">CollegeSpace</p>

      <button className="buttonStyle" type="button" onClick={props.onclick}>
        Branch
      </button>
      <p onClick={props.onclick} className="path">
        {academicsPath}
      </p>
    </Nav>
  );
};

export default Navbar;
