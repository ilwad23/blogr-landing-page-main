import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: absolute;
  height: 83px !important;
  width: 1160px;
  left: 152px;
  right: 139px;
  top: 42px;
  padding-right: 25px;
  padding-left: 25px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLogo = styled.img`
  width: 101px;
  height: 40px;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
`;
const NavLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavArrow = styled.img`
  width: 10px;
  height: 7px;
`;
const NavLinkTitle = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: white;
  padding-right: 10px;
  padding-left: 30px;
`;
const NavButton = styled.button`
  margin-left: 30px;
  background: #ffffff;
  border-radius: 100px;
  border: none;
  width: 139px;
  height: 52px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #ff4d5c;
`;

function Nav() {
  return (
    <NavBar>
      <NavContainers>
        <NavLogo src="./images/logo.svg" alt="logo" />
        <NavLinks>
          <NavLink>
            <NavLinkTitle>Products</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
          </NavLink>
          <NavLink>
            <NavLinkTitle>Contact</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
          </NavLink>
          <NavLink>
            <NavLinkTitle>Connect</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
          </NavLink>
        </NavLinks>
      </NavContainers>
      <NavContainers>
        <NavLinkTitle>Login</NavLinkTitle>
        <NavButton>Sign Up</NavButton>
      </NavContainers>
    </NavBar>
  );
}

export default Nav;
