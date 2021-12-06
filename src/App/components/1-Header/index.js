import React from "react";
import Hook from "./Hook";
import Nav from "./Nav/";

function Header({ desktopOrMobile }) {
  return (
    <header className="header">
      <div className="header__bg">
        <img
          src={`./images/bg-shapes-${desktopOrMobile}.svg`}
          alt="bg-shapes"
        />
      </div>
      <div className="header__container">
        <Nav desktopOrMobile={desktopOrMobile} />
        <Hook />
      </div>
    </header>
  );
}

export default Header;
