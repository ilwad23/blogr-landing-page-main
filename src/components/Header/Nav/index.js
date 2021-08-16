import React, { useState } from "react";
import "../../../app.css";
import {
  NavBar,
  NavLogo,
  NavMenuIcon,
  NavMenu,
  NavLeft,
  NavRight,
  NavLinks,
  NavLink,
  NavMain,
  NavDropDownMenu,
  NavListitem,
  NavLinkTitle,
  NavArrow,
  NavButtonWrapper,
  NavButton,
} from "./style";
function Nav({ desktopOrMobile }) {
  const [toggle, setToggle] = useState(true);
  const onToggle = toggle ? "open" : "close";
  return (
    <NavBar>
      <NavLogo src="./images/logo.svg" alt="logo" />
      <NavMenuIcon
        onClick={() => setToggle(!toggle)}
        src={`./images/icon-${onToggle}.svg`}
        alt="nav menu icon"
      />
      <NavMenu show={toggle}>
        <NavLeft>
          <NavLinks>
            <NavLink>
              <NavMain>
                <NavLinkTitle>Products</NavLinkTitle>
                <NavArrow
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </NavMain>
              <NavDropDownMenu className="a">
                <NavListitem>Overview</NavListitem>
                <NavListitem>Pricing</NavListitem>
                <NavListitem>Marketplace</NavListitem>
                <NavListitem>Features</NavListitem>
                <NavListitem>Integration</NavListitem>
              </NavDropDownMenu>
            </NavLink>
            <NavLink>
              <NavMain>
                <NavLinkTitle>Company</NavLinkTitle>
                <NavArrow
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </NavMain>
              <NavDropDownMenu>
                <NavListitem>About</NavListitem>
                <NavListitem>Team</NavListitem>
                <NavListitem>Blog</NavListitem>
                <NavListitem>Careers</NavListitem>
              </NavDropDownMenu>
            </NavLink>
            <NavLink>
              <NavMain>
                <NavLinkTitle>Connect</NavLinkTitle>
                <NavArrow
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </NavMain>
              <NavDropDownMenu className="a">
                <NavListitem>Contact</NavListitem>
                <NavListitem>Newsletter</NavListitem>
                <NavListitem>Linkedin</NavListitem>
              </NavDropDownMenu>
            </NavLink>
          </NavLinks>
        </NavLeft>
        <NavRight>
          <NavLinkTitle className="login">Login</NavLinkTitle>
          <NavButton className="btn">Sign Up</NavButton>
        </NavRight>
      </NavMenu>
    </NavBar>
  );
}

export default Nav;
