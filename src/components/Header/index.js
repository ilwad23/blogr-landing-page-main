import React from "react";
import { Hero, BgShapes, Hook, Title, SubTitle, Start, Learn } from "./style";
import Nav from "./Nav/";
import "../../app.css"

function Header() {
  return (
    <Hero>
      <BgShapes src={`./images/bg-shapes-desktop.svg`} alt="logo" />
      <Nav />
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
