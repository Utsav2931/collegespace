import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 45px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  background-color: #ffffff;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.05);


  .logo {
    width: 100%;
    text-align: center;
    padding: auto;
    margin: auto;
    padding-left: 70px;
    font-weight: bold;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    .path {
      display: none;
    }

    .logo {
      text-align: end;
      align-iteam: end;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Burger />
      <p className="logo">CollegeSpace</p>
      <p className="path">CSPIT/CE/SEM5</p>
    </Nav>
  );
};

export default Navbar;
