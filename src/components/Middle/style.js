import styled from "styled-components";

export const MiddleWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 400px;
  background: #3a3a59;
  box-sizing: border-box;
  border-radius: 0px 100px;
  /* z-index: -10/00; */
`;
export const MiddleBgCircles = styled.img`
position: relative;
z-index: 99;
`
export const MiddleTitle = styled.h1`
  position: absolute;
  width: 503px;
  height: 46px;
  left: 738px;
  top: 109px;
  font-family: Overpass;
  font-weight: bold;
  font-size: 36px;
  line-height: 55px;
  
  `;
export const MiddlePara = styled.p`
  position: absolute;
  width: 534px;
  height: 107px;
  left: 731px;
  top: 183px;
  font-family: Overpass;
  font-style: normal;
  font-weight: bold;
  font-size: 17.5px;
  line-height: 27px;
  
  color: #ffffff;
  `;
  export const MiddlePhones = styled.img`
    position: absolute;
    top: -50px;
    left: 185px;
    z-index: 999;
  `;