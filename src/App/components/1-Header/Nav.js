import React from "react";
import { useStateValue } from "../../../states/StateProvider";
function Nav({ desktopOrMobile }) {
  const [{ toggle, onToggle }, dispatch] = useStateValue();
  return (
    <nav className="navBar">
      <div className="navBar__container">
        <img className="navBar__logo" src="./images/logo.svg" alt="logo" />
        <img
          className="navBar__menuIcon"
          onClick={() => dispatch({ type: "toggle" })}
          src={`./images/icon-${onToggle}.svg`}
          alt="nav menu icon"
        />
        <div
          className={`navBar__menu
      ${toggle ? "navBar__menu--hide" : "navBar__menu--show"}`}
        >
          <ul className="navBar__links">
            <li className="navBar__link">
              <div className="navBar__mainLink">
                <p className="navBar__p">Products</p>
                <img
                className='navBar__arrow'
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className="navBar__listItem">Overview</div>
                <div className="navBar__listItem">Pricing</div>
                <div className="navBar__listItem">Marketplace</div>
                <div className="navBar__listItem">Features</div>
                <div className="navBar__listItem">Integration</div>
              </div>
            </li>
            <li className="navBar__link">
              <div className="navBar__mainLink">
                <p className="navBar__p">Company</p>
                <img
                className='navBar__arrow'
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className="navBar__listItem">About</div>
                <div className="navBar__listItem">Team</div>
                <div className="navBar__listItem">Blog</div>
                <div className="navBar__listItem">Careers</div>
              </div>
            </li>
            <li className="navBar__link">
              <div className="navBar__mainLink">
                <p className="navBar__p">Connect</p>
                <img
                className='navBar__arrow'
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className="navBar__listItem">Contact</div>
                <div className="navBar__listItem">Newsletter</div>
                <div className="navBar__listItem">Linkedin</div>
              </div>
            </li>
          </ul>
          <div className="navBar__right">
            <p className="navBar__login navBar__p">Login</p>
            <button className="navBar__btn btn">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
