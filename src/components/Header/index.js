import React from "react";
import Hook from "./Hook";
import Nav from "./Nav";

function Header({ desktopOrMobile }) {
  return (
    <div className="hero">
      <div className="hero__bg">
        <img src={`./images/bg-shapes-${desktopOrMobile}.svg`} />
      </div>
      {/* <BgShapes src={`./images/bg-shapes-${desktopOrMobile}.svg`} alt="logo" />
      <Nav desktopOrMobile={desktopOrMobile} />
    */}
      <Hook />
    </div>
  );
}

export default Header;
