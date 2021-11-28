import styled from "styled-components";
export const InfoWrapper = styled.div`
  /* both */
  position: relative;
  background-color: white;
  font-family: Overpass;
  font-style: normal;
  display: flex;
  color: #1f3c58;
  /* desktop */
  @media screen and (min-width: 586px) {
    width: 1440px;
    height: 1010px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    flex-direction: column-reverse;
  }
`;
export const InfoTitle = styled.h2`
  /* both */
  position: absolute;
  font-weight: 900;
  /* desktop */
  @media screen and (min-width: 586px) {
    width: 406px;
    height: 46px;
    left: 527px;
    top: 148px;
    z-index: 100;
    font-size: 37px;
    line-height: 57px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    width: 375px;
    height: 46px;
    top: 83px;
    font-size: 24px;
    line-height: 37px;
    text-align: center;
  }
`;
export const InfoDivider = styled.div`
  /* desktop */
  @media screen and (min-width: 586px) {
    width: 720px;
    height: 1010px;
  }
`;

export const InfoContent = styled.div`
  /* desktop */
  @media screen and (min-width: 586px) {
    margin-top: 300px;
    margin-left: 160px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    width: 375px;
    height: 828px;
    margin-top: 30px;
  }
`;

export const InfoText = styled.div`
  /* desktop */
  @media screen and (min-width: 586px) {
    width: 563px;
    height: 255px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    text-align: center;
  }
`;
export const InfoSubTitle = styled.h3`
  /* both */
  font-weight: 700;
  font-size: 27.5px;
  /* desktop */
  @media screen and (min-width: 586px) {
    line-height: 42px;
    margin-bottom: 20px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    width: 262px;
    height: 60px;
    margin-left: 57px;
    font-weight: bold;
    font-size: 26.5px;
    line-height: 103%;
    text-align: center;
  }
`;
export const InfoPara = styled.p`
  /* both */
  color: #4b5862;
  font-weight: normal;
  /* desktop */
  @media screen and (min-width: 586px) {
    font-size: 17px;
    line-height: 26px;
  }
  /* mobile */
  @media screen and (max-width: 585px) {
    width: 279px;
    height: 247px;
    margin-top: 30px;
    margin-left: 48px;
    font-size: 15.4px;
    line-height: 24px;
    text-align: center;
  }
`;
export const InfoImg = styled.img`
  /* mobile */
  @media screen and (max-width: 585px) {
    margin-top: 158px;
  }
`;
