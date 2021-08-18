import React from "react";
import {
  MiddleWrapper,
  MiddleBgCircles,
  MiddleTitle,
  MiddlePara,
  MiddlePhones,
} from "./style.js";
import "../../app.css";
function Middle({ desktopOrMobile }) {
  return (
    <MiddleWrapper>
      <MiddlePhones
        src={`./images/phones-${desktopOrMobile}.svg`}
        alt="phones"
      />
      <MiddleBgCircles
        src={`./images/bg-circles-${desktopOrMobile}.svg`}
        alt="bg-circles"
      />
      <MiddleTitle>State of the Art Infrastructure</MiddleTitle>
      <MiddlePara>
        With reliability and speed in mind, worldwide data centers provide the
        backbone for ultra-fast connectivity. This ensures your site will load
        instantly, no matter where your readers are, keeping your site
        competitive.
      </MiddlePara>
    </MiddleWrapper>
  );
}

export default Middle;
