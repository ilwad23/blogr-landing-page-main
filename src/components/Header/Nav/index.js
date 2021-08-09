import React from "react";
import {
  NavBar,
  NavContainers,
  NavLogo,
  NavLinks,
  NavLink,
  NavLinkTitle,
  NavArrow,
  NavButton,
} from "./style";
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
