import styled from "styled-components";
export const FooterWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 360px;
  background: #24242d;
  border-radius: 0px 100px 0px 0px;
  padding-top: 70px;
  padding-left: 160px;
  display: flex;
  align-items: flex-start;
  `;
  export const FooterLogo = styled.img`
    width: 101px;
    height: 40px;
    margin-right: 170px;
    `;
  export const FooterLinks = styled.div`
  width: 120px;
  height: 240px;
  margin-right: 170px;
  `
  export const FooterLink = styled.p`
    &:first-of-type {
        margin-bottom: 30px;
        font-weight: 500;
    }
    width: 69px;
    height: 18px;
    margin-bottom: 15px;
    margin-left: 5px;
    font-weight: 300;
  `;