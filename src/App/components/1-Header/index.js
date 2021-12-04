import React from "react";
import Hook from "./Hook";
import Nav from "./Nav";

function Header({ desktopOrMobile }) {
  return (
    <div className="hero">
      <div className="hero__bg">
        <img
          src={`./images/bg-shapes-${desktopOrMobile}.svg`}
          alt="bg-shapes"
        />
      </div>
      <div className="hero__container">
        <Nav desktopOrMobile={desktopOrMobile} />
        <Hook />
      </div>
    </div>
  );
}

export default Header;
