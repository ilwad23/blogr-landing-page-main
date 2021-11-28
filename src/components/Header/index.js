import React from "react";
import Hook from "./Hook";
import Nav from "./Nav";

function Header({ desktopOrMobile }) {
  return (
    <header className="hero">
      <div className="hero__bg">
        <img src={`./images/bg-shapes-${desktopOrMobile}.svg`} alt='bg-shapes'/>
      </div>
      <div className="hero__wrapper">
        <Nav desktopOrMobile={desktopOrMobile} />
        <Hook />
      </div>
    </header>
  );
}

export default Header;
