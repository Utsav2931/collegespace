import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 45px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right:0;
  left: 0;
  background-color: #ffffff;
  align-items:center;
  box-sizing: border-box;
  box-shadow: 0px 8px 8px -6px rgba(0,0,0,.05);
  
  .logo {
    width: 100%;
    text-align: center;
    padding-left: 100px;
    padding: auto;
    margin: auto;
    font-weight: bold;
    font-size: 20px;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <Burger />
      <div className="logo">
        CollegeSpace
      </div>
      <div >
        CSPIT/CE/SEM5
      </div>
      
    </Nav>
  )
}

export default Navbar