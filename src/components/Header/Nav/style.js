import styled from "styled-components";

export const NavBar = styled.nav`
  /* both */
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 10000;
  /* desktop */
  height: 83px;
  width: 1148px;
  left: 150px;
  top: 37px;
  padding-right: 25px;
  padding-left: 25px;
  /* mobile */
  @media screen and (max-width: 375px) {
  width: 340px;
  height: 28px;
  left: 20px;
  top: 48px;
  justify-content: space-between;
  padding: 0%;
  padding-right: 10px;
  }
`;
export const NavMenu = styled.div`
  /* desktop */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  /* mobile */
  @media screen and (max-width: 375px) {
  display: ${({show}) => show?'none':'block' };
  position: absolute;
  width: 324px;
  left: 12px;
  top: 50px;
  padding-top: 15px;
  padding-bottom: 30px;
  background: #fbf9fb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  }
`;
export const NavLeft = styled.div`
/* desktop */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  /* mobile */
  @media screen and (max-width: 375px) {
  display: block;
  height: fit-content;
  }
`;
export const NavRight = styled.div`
/* both */
.login:active {
    text-decoration: underline;
    font-weight: 700;
  }
  /* desktop */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  /* mobile */
  @media screen and (max-width: 375px) {
  display: block;
  border-top: 1.8px solid #e1eeee;
  height: fit-content;
  .login {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  text-align: center;
  margin: 0 25px;
  }
`;
export const NavLogo = styled.img`
  /* both */
  cursor: pointer;
  /* desktop */
  width: 101px;
  height: 40px;
  /* mobilš */
  @media screen and (max-width: 375px) {
  width: 70px;
  height: 28px;
  }
`;
export const NavMenuIcon = styled.img`
  /* both */
  cursor: pointer;
  /* desktop */
  display: none;
  /* mobile */
  @media screen and (max-width: 375px) {
  display: block;
  }
`;
export const NavLinks = styled.div`
  /* desktop */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  width: 340px;
  /* mobile */
  @media screen and (max-width: 375px) {
  display: block;
  margin: 0%;
  width: 100%;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  }
`;
export const NavLink = styled.div`
  /* both */
  display: flex;
  align-items: center;
  position: relative;
  /* desktop */
  height: 80px;
  justify-content: space-between;
  /* mobile */
  @media screen and (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    height: fit-content;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
  }
`;
export const NavMain = styled.div`
/* both */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;
export const NavDropDownMenu = styled.div`
/* bøth */
  border-radius: 4px;
  ${NavLink}:hover & {
    display: block;
  }
  display: none;
  /* desktop */
  position: absolute;
  width: 168px;
  top: 80px;
  background: #ffffff;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.25);
  /* mobile */
  @media screen and (max-width: 375px) {
    position: static;
  width: 275px;
  text-align: center;
  margin: 15px 0;
  background: #f0eef2;
  border-radius: 4px;
  box-shadow: none;
  }
  `;
export const NavListitem = styled.div`
/* both */
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #1f3c58;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  &:hover {
    font-weight: 700;
  }
`;
export const NavArrow = styled.img`
  /* both */
  width: 10px;
  height: 7px;
  ${NavLink}:hover & {
    transform: rotate(180deg);
  }
`;
export const NavLinkTitle = styled.p`
  /* both */
  cursor: pointer;
  padding-right: 10px;
  padding-left: 30px;
  ${NavLink}:hover & {
    text-decoration: underline;
    font-weight: 700;
  }
  /* mobile */
  @media screen and (max-width: 375px) {
  color: #1f3c58;
  font-weight: 500;
  ${NavLink}:hover & {
    font-weight: 400;
    text-decoration: none;
  }
  }
`;
export const NavButton = styled.button`
  /* both */
  background: #ffffff;
  border: none;
  color: #ff4d5c;
  &:hover {
    background: #fe7c87;
    color: white;
  }
  /* desktop */
  margin-left: 30px;
  /* mobile */
  @media screen and (max-width: 375px) {
  background: linear-gradient(98.74deg, #ff8670 0.51%, #ff4559 93.91%);
  color: white;
  margin-left: 20px;
  }
`;
