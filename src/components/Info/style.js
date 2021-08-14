import styled from "styled-components";
export const InfoWrapper = styled.div`
  /* both */
  background-color: white;
  font-family: Overpass;
  font-style: normal;
  font-weight: bold;
  color: #1f3c58;
  /* desktop */
  @media screen and (min-width: 376px) {
    position: relative;
    width: 1440px;
    height: 1010px;
    display: flex;
  }
`;
export const InfoTitle = styled.h2`
  /* both */
  /* desktop */
  @media screen and (min-width: 376px) {
    position: absolute;
    width: 406px;
    height: 46px;
    left: 527px;
    top: 148px;
    z-index: 100;
    font-size: 37px;
    line-height: 57px;
  }
`;
export const InfoDivider = styled.div`
  /* desktop */
  @media screen and (min-width: 376px) {
    width: 720px;
    height: 1010px;
  }
`;

export const InfoContent = styled.div`
  /* desktop */
  @media screen and (min-width: 376px) {
    width: 563px;
    height: 481px;
    margin-left: 157px;
    margin-top: 308px;
  }
`;

export const InfoText = styled.div`
  /* desktop */
  @media screen and (min-width: 376px) {
    width: 563px;
    height: 255px;
  }
`;
export const InfoSubTitle = styled.h3`
  font-size: 27.5px;
  line-height: 42px;
  margin-bottom: 20px;
`;
export const InfoPara = styled.p`
  font-weight: normal;
  font-size: 17px;
  line-height: 26px;

  color: #4b5862;
`;
export const InfoImg = styled.img``;
