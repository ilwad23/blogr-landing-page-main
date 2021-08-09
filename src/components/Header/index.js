import React from "react";
import { Hero, BgShapes, Hook, Title, SubTitle, Start, Learn } from "./style";
import Nav from "./Nav/";


function Header() {
  return (
    <Hero>
      <BgShapes src={`./images/bg-shapes-desktop.svg`} alt="logo" />
      <Nav />
      <Hook>
        <Title>A modern publishing platform</Title>
        <SubTitle>Grow your audience and build your online brand</SubTitle>
        <Start>Start for Free</Start>
        <Learn>Learn More</Learn>
      </Hook>
    </Hero>
  );
}

export default Header;
