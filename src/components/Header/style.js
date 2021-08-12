import styled from "styled-components";

export const Hero = styled.div`
  width: 1440px;
  height: 600px;
  background: linear-gradient(98.74deg, #ff8670 0.51%, #ff4559 93.91%);
  border-radius: 0px 0px 0px 100px;
  z-index: -100;
`;
export const BgShapes = styled.img``;
export const Hook = styled.div`
  position: absolute;
  width: 832px;
  height: 271px;
  left: 301px;
  top: 212px;
  z-index: 1;
`;
export const Title = styled.h1`
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
export const SubTitle = styled.p`
  position: absolute;
  width: 450px;
  height: 28px;
  left: 208px;
  top: 109px;
  font-size: 19.5px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;
export const Start = styled.button`
  position: absolute;
  left: 272.5px;
  top: 178.5px;

  background: #ffffff;
  border: none;
  color: #ff4d5c;
  &:hover {
    background: #fe7c87;
    color: white;
  }
`;
export const Learn = styled.button`
  position: absolute;
  left: 427.5px;
  top: 178.5px;
  border: 1px solid #ffffff;
  background-color: transparent;
  color: #fbf9fb;
  &:hover {
    background: #fbf9fb;
    border: none;
    color: #ff4d5c;
  }
`;
