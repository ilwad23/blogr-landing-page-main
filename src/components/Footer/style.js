import styled from "styled-components";
export const FooterWrapper = styled.div`
  /* both */
  position: relative;
  border-radius: 0px 100px 0px 0px;
  background: #24242d;
  display: flex;
  /* desktop */
  @media screen and (min-width: 376px) {
    width: 1440px;
    height: 360px;
    padding-top: 70px;
    padding-left: 160px;
    align-items: flex-start;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    flex-direction: column;
    align-items: center;
    /* text-align: center; */
    width: 375px;
    height: 787px;
  }
`;
export const FooterLogo = styled.img`
  /* both */
  width: 101px;
  height: 40px;
  /* desktop */
  @media screen and (min-width: 376px) {
    margin-right: 170px;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    margin-top: 65px;
    margin-bottom: 85px;
  }
`;
export const FooterLinks = styled.div`
  /* both */
  width: 120px;
  /* desktop */
  @media screen and (min-width: 376px) {
    margin-right: 170px;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
    margin-bottom: 45px;
  }
`;
export const FooterLink = styled.p`
  &:first-of-type {
    margin-bottom: 30px;
    font-weight: 500;
    cursor: none; 
  }
  &:not(:first-of-type):active {
    text-decoration: underline;
  }
  cursor: pointer; 
  width: 100%;
  text-align: center;
  margin-bottom: 15px;
  font-weight: 300;
`;
