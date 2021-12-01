import React from "react";
import { useStateValue } from "../../states/StateProvider";
function Nav({ desktopOrMobile }) {  const [{ toggle, onToggle }, dispatch] = useStateValue();
  return (
    <nav className="navBar">
      <div className="navBar__wrapper">
        <img className="navBar__logo" src="./images/logo.svg" alt="logo" />
        <img
          className="navBar__menuIcon"
          onClick={() => dispatch({type:'toggle'})}
          src={`./images/icon-${onToggle}.svg`}
          alt="nav menu icon"
        />
        <div
          className={`navBar__menu
      ${toggle ? "navBar__menu--hide" : "navBar__menu--show"}`}
        >
          <div className="navBar__left">
            <div className="navBar__link">
              <div className="navBar__link__main">
                <p className='navBar__p'>Products</p>
                <img
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className='navBar__listItem'>Overview</div>
                <div className='navBar__listItem'>Pricing</div>
                <div className='navBar__listItem'>Marketplace</div>
                <div className='navBar__listItem'>Features</div>
                <div className='navBar__listItem'>Integration</div>
              </div>
            </div>
            <div className="navBar__link">
              <div className="navBar__link__main">
                <p className='navBar__p'>Company</p>
                <img
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className='navBar__listItem'>About</div>
                <div className='navBar__listItem'>Team</div>
                <div className='navBar__listItem'>Blog</div>
                <div className='navBar__listItem'>Careers</div>
              </div>
            </div>
            <div className="navBar__link">
              <div className="navBar__link__main">
                <p className='navBar__p'>Connect</p>
                <img
                  src={`./images/icon-arrow-${desktopOrMobile}.svg`}
                  alt="arrow"
                />
              </div>
              <div className="navBar__dropDownMenu">
                <div className='navBar__listItem'>Contact</div>
                <div className='navBar__listItem'>Newsletter</div>
                <div className='navBar__listItem'>Linkedin</div>
              </div>
            </div>
          </div>
          <div className="navBar__right">
            <p className="navBar__login navBar__p">
              Login
            </p>
            <button className="navBar__btn btn">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
