import React, {useContext} from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";
import Toggle from "../UI/DarkMode/Toggle.js";
import { ThemeContext } from "../UI/DarkMode/ThemeContext";

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 45px;
  z-index: 9999;
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  color: ${({ theme }) => (theme === "light" ? "black" : "#ffffff")};
  z-index: 9999;
  background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "var(--color-div)")};
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.05);
  display: ${({ open }) => (open ? "none" : "")};

  .logo {
    width: 100%;
    text-align: center;
    padding: auto;
    margin: auto;
    color: ${({ theme }) => (theme === "light" ? "black" : "var(--comp-white)")};
    padding-left: 70px;
    font-weight: bold;
    font-size: 20px;
  }

  .buttonStyle {
    display: ${({ col, dep, sem }) =>
      col == null || dep == null || sem == null ? "" : "none"};
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
    color: ${({ theme }) => (theme === "light" ? "black" : "var(--comp-white)")};;
    cursor: pointer;
    display: ${({ col, dep, sem }) =>
      col == null || dep == null || sem == null ? "none" : ""};
  }

  .toggleDiv{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 600px) {
    .path {
      display: none;
      color: black;
    }

    .buttonStyle {
      display: none;
    }

    .logo {
      text-align: end;
      align-iteam: end;
    }
  }
`;

// Component to display Navigation Bar at the top of the screen
const Navbar = (props) => {

  const {theme, toggleTheme} = useContext(ThemeContext);
  console.log('New Theme Controller', theme);

  let academicsPath = `${props.college}/${props.department}/${props.semester}`;
  let isValid =
    props.college == null || props.department == null || props.semester == null
      ? false
      : true;
  return (
    <Nav
      open={props.show}
      col={props.college}
      dep={props.department}
      sem={props.semester}
      theme={theme}
    >
      {/* The Hamburger icon to open the side drawer */}
      <Burger
        academicsPath={academicsPath}
        isValid={isValid}
        show={props.show}
        onclick={props.onclick}
        theme={theme}
      />
      {/* The middle CollegeSpace logo */}
      <Link style={{ textDecoration: "none" }} to="/">
        <p className="logo">CollegeSpace</p>
      </Link>
      {/* Button to select and modify the path */}
      <button className="buttonStyle" type="button" onClick={props.onclick}>
        Branch
      </button>
      <div className="toggleDiv">
      <div onClick={props.onclick} className="path">
        {academicsPath}
      </div>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </Nav>
  );
};

export default Navbar;
