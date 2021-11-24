import React from "react";
import { Hero, BgShapes, Hook, Title, SubTitle, Start, Learn } from "./style";
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
      <div className='hook'>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <Start className="btn">Start for Free</Start>
        <Learn className="btn">Learn More</Learn> 
      </div>
    </div>
  );
}

export default Header;
