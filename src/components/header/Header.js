import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Hero = styled.div`
  position: relative;
  width: 1440px;
  height: 600px;
  background: linear-gradient(98.74deg, #ff8670 0.51%, #ff4559 93.91%);
  border-radius: 0px 0px 0px 100px;
`;

function Header() {
  return (
    <Hero>
      <Nav />
    </Hero>
  );
}

export default Header;
