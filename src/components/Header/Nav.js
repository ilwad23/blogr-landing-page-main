import React, { useState } from "react";
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
} from "./navStyle";
function Nav({ desktopOrMobile }) {
  const [toggle, setToggle] = useState(true);
  const onToggle = toggle ? "open" : "close";
  return (
    <nav className="navBar">
      <div className="navBar__wrapper">
        <img className="navBar__logo" src="./images/logo.svg" alt="logo" />
        <img
          className="navBar__menuIcon"
          onClick={() => setToggle(!toggle)}
          src={`./images/icon-${onToggle}.svg`}
          alt="nav menu icon"
        />
        <div
          className={`navBar__menu
      ${toggle ? "navBar__menu--hide" : "navBar__menu--show"}`}
          show={toggle}
        >
          <div className='navBar__left'>
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
                <NavDropDownMenu className="a">
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
          </div>
          <NavRight>
            <NavLinkTitle className="login">Login</NavLinkTitle>
            <NavButton className="btn">Sign Up</NavButton>
          </NavRight>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
