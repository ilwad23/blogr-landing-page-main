import React from "react";
import { useStateValue } from "../../../../states/StateProvider";
import Links from "./Links";
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
          <Links desktopOrMobile={desktopOrMobile} />
          <div className="navBar__end">
            <p className="navBar__login navBar__p">Login</p>
            <button className="navBar__btn btn">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
