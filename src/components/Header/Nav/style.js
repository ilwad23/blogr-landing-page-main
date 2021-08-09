import styled from "styled-components";

export const NavBar = styled.nav`
  position: absolute;
  height: 83px;
  left: 150px;
  right: 141px;
  top: 37px;
  padding-right: 25px;
  padding-left: 25px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavContainers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled.img`
  width: 101px;
  height: 40px;
`;
export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
`;
export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavArrow = styled.img`
  width: 10px;
  height: 7px;
`;
export const NavLinkTitle = styled.p`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: white;
  padding-right: 10px;
  padding-left: 30px;
`;
export const NavButton = styled.button`
  margin-left: 30px;
  background: #ffffff;
  border-radius: 100px;
  border: none;
  width: 139px;
  height: 52px;
  font-family: Ubuntu;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #ff4d5c;
`;
