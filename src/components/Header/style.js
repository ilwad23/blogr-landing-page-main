import styled from "styled-components";

export const Hero = styled.div`
  /* both */
  background: linear-gradient(98.74deg, #ff8670 0.51%, #ff4559 93.91%);
  /* desktop */
  width: 1440px;
  height: 600px;
  border-radius: 0px 0px 0px 100px;
  z-index: -100;
  /* mobile */
  @media screen and (max-width: 375px) {
  width: 375px;
  height: 525px;
  border-radius: 0px 0px 0px 90px;
  overflow-y: hidden;
  }
`;
export const BgShapes = styled.img``;
export const Hook = styled.div`
  /* both */
  position: absolute;
  /* desktop */
  width: 832px;
  height: 271px;
  left: 301px;
  top: 212px;
  z-index: 1;
  /* mobile */
  @media screen and (max-width: 375px) {
  width: 292px;
  height: 259px;
  left: 40px;
  top: 161px;
  }
`;
export const Title = styled.h1`
  /* both */
  position: absolute;
  font-family: Overpass;
  font-weight: 600;
  font-size: 60px;
  line-height: 92px;
  /* desktop */
  width: 815px;
  height: 78.86px;
  left: 17px;
  top: 6px;
  /* mobile */
  @media screen and (max-width: 375px) {
  width: 282px;
  height: 75px;
  left: 2px;
  top: 6px;
  font-size: 31.7px;
  line-height: 127.1%;
  text-align: center;
  }
`;
export const SubTitle = styled.p`
  /* both */
  position: absolute;
  text-align: center;
  /* desktop */
  width: 450px;
  height: 28px;
  left: 208px;
  top: 109px;
  font-size: 19.5px;
  line-height: 22px;
  /* mobile */
  @media screen and (max-width: 375px) {
  width: 256px;
  height: 37px;
  left: 10px;
  top: 104px;
  font-size: 16px;
  line-height: 18px;
  }
`;
export const Start = styled.button`
  /* both */
  position: absolute;
  background: #ffffff;
  border: none;
  color: #ff4d5c;
  cursor: pointer;
  &:hover {
    background: #fe7c87;
    color: white;
  }
  /* desktop */
  left: 272.5px;
  top: 178.5px;
  /* mobile */
  @media screen and (max-width: 375px) {
    width: 122px;
    height: 41px;
    left: 10px;
    top: 185px;
  }
`;
export const Learn = styled.button`
  /* both */
  position: absolute;
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #fbf9fb;
  cursor: pointer;
  &:hover {
    background: #fbf9fb;
    border: none;
    color: #ff4d5c;
  }
  /* desktop */
  left: 427.5px;
  top: 178.5px;
  /* mobile */
  @media screen and (max-width: 375px) {
    width: 119.26px;
    height: 40.88px;
    left: 152.27px;
    top: 184.81px;
  }
`;
