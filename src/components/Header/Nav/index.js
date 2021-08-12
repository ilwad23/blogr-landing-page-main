import React, { useState } from "react";
import "../../../app.css";
import {
  NavBar,
  NavLeft,
  NavRight,
  NavLogo,
  NavLinks,
  NavLink,
  NavDropDownMenu,
  NavListitem,
  NavLinkTitle,
  NavArrow,
  NavButton,
} from "./style";
function Nav() {
  return (
    <NavBar>
      <NavLeft>
        <NavLogo src="./images/logo.svg" alt="logo" />
        <NavLinks>
          <NavLink>
            <NavLinkTitle>Products</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
            <NavDropDownMenu>
              <NavListitem>Overview</NavListitem>
              <NavListitem>Pricing</NavListitem>
              <NavListitem>Marketplace</NavListitem>
              <NavListitem>Features</NavListitem>
              <NavListitem>Integration</NavListitem>
            </NavDropDownMenu>
          </NavLink>
          <NavLink>
            <NavLinkTitle>Company</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
            <NavDropDownMenu className="a">
              <NavListitem>About</NavListitem>
              <NavListitem>Team</NavListitem>
              <NavListitem>Blog</NavListitem>
              <NavListitem>Careers</NavListitem>
            </NavDropDownMenu>
          </NavLink>
          <NavLink>
            <NavLinkTitle>Connect</NavLinkTitle>
            <NavArrow src="./images/icon-arrow-light.svg" alt="arrow" />
            <NavDropDownMenu>
              <NavListitem>Contact</NavListitem>
              <NavListitem>Newsletter</NavListitem>
              <NavListitem>Linkedin</NavListitem>
            </NavDropDownMenu>
          </NavLink>
        </NavLinks>
      </NavLeft>
      <NavRight>
        <NavLinkTitle className='login'>Login</NavLinkTitle>
        <NavButton className="btn">Sign Up</NavButton>
      </NavRight>
    </NavBar>
  );
}

export default Nav;
