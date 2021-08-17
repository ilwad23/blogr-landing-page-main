import styled from "styled-components";

export const MiddleWrapper = styled.div`
  /* both */
  position: relative;
  background: #3a3a59;
  box-sizing: border-box;
  border-radius: 0px 100px;
  font-family: Overpass;
  font-weight: bold;
  color: #ffffff;
  /* desktop */
  @media screen and (min-width: 376px) {
    width: 1440px;
    height: 400px;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 545px;
  }
`;
export const MiddleBgCircles = styled.img`
  /* mobile */
  @media screen and (max-width: 375px) {
    z-index: -10;
    border-radius: 0 100px 0 100px;
  }
`;
export const MiddleTitle = styled.h1`
  /* desktop */
  @media screen and (min-width: 376px) {
    position: absolute;
    width: 503px;
    height: 46px;
    left: 738px;
    top: 109px;
    font-size: 36px;
    line-height: 55px;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    position: absolute;
    width: 302px;
    height: 103px;
    left: 37px;
    top: 188px;
    font-size: 33px;
    line-height: 51px;
    text-align: center;
  }
`;
export const MiddlePara = styled.p`
  /* desktop */
  @media screen and (min-width: 376px) {
    position: absolute;
    width: 534px;
    height: 107px;
    left: 731px;
    top: 183px;
    font-size: 17.5px;
    line-height: 25px;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    position: absolute;
    width: 295px;
    height: 158px;
    left: 44px;
    top: 300px;
    font-size: 14.5px;
    line-height: 22px;
    text-align: center;
  }
`;
export const MiddlePhones = styled.img`
  /* desktop */
  @media screen and (min-width: 376px) {
    position: absolute;
    top: -50px;
    left: 185px;
    z-index: 999;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    position: absolute;
    top: -160px;
    z-index: 1000;
  }
`;
