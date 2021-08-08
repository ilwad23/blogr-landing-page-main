import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Hero = styled.div`
  position: relative;
  width: 1440px;
  height: 600px;
  background: linear-gradient(98.74deg, #ff8670 0.51%, #ff4559 93.91%);
  border-radius: 0px 0px 0px 100px;
  z-index: -100;
`;
const BgShapes = styled.img`
  position: absolute;
  z-index: -90;
`
const Hook = styled.div`
  position: absolute;
  width: 832px;
  height: 271px;
  left: 301px;
  top: 212px;
`;
const Title = styled.h1`
  position: absolute;
  width: 815px;
  height: 78.86px;
  left: 17px;
  top: 6px;
  font-family: Overpass;
  font-style: normal;
  font-weight: 600;
  font-size: 60px;
  line-height: 92px;
  color: #ffffff;
`;
const SubTitle = styled.p`
  position: absolute;
  width: 424px;
  height: 28px;
  left: 208px;
  top: 109px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: normal;
  font-size: 19.5px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;
const Start = styled.button`
  position: absolute;
  width: 139px;
  height: 52px;
  left: 272.5px;
  top: 178.5px;
  background: #fbf9fb;
  border-radius: 100px;
  border: none;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #ff4d5c;
`;
const Learn = styled.button`
  position: absolute;
  width: 139px;
  height: 46px;
  left: 427.5px;
  top: 181.5px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 100px;
  background-color: transparent;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  color: #fbf9fb;
`;
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
