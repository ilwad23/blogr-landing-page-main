import React from "react";
import { Hero, BgShapes, Hook, Title, SubTitle, Start, Learn } from "./style";
import Nav from "./Nav";


function Header({ desktopOrMobile }) {
  return (
    <Hero>
      <BgShapes src={`./images/bg-shapes-${desktopOrMobile}.svg`} alt="logo" />
      <Nav desktopOrMobile={desktopOrMobile} />
      <Hook>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <Start className="btn">Start for Free</Start>
        <Learn className="btn">Learn More</Learn>
      </Hook>
    </Hero>
  );
}

export default Header;
