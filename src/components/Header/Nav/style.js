import styled from "styled-components";

export const NavBar = styled.nav`
  position: absolute;
  height: 83px;
  width: 1148px;
  left: 150px;
  top: 37px;
  padding-right: 25px;
  padding-left: 25px;
  background-color: transparent;
  z-index: 10000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  `;
export const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  .login:active {
    text-decoration: underline;
    font-weight: 700;
  }
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
  width: 340px;
  `;
export const NavLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;

`;
export const NavDropDownMenu = styled.div`
  position: absolute;
  width: 168px;
  top: 80px;
  background: #ffffff;
  box-shadow: 0px 20px 15px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: none;
  ${NavLink}:hover & { display: block;}
`;
export const NavListitem = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
color: #000;
padding-top: 15px;
padding-bottom: 15px;
padding-left: 20px;
  &:hover {
    font-weight: 700;
  }
`; 
export const NavArrow = styled.img`
  width: 10px;
  height: 7px;
${NavLink}:hover & {
  transform: rotate(180deg);
}
`;
export const NavLinkTitle = styled.p`
  padding-right: 10px;
  padding-left: 30px;
  ${NavLink}:hover & {
    text-decoration: underline;
    font-weight: 700;
  }

`;
export const NavButton = styled.button`
  margin-left: 30px;
  background: #ffffff;
  border: none;
  color: #ff4d5c;
  &:hover {
    background: #fe7c87;
    color: white;
  }
`;
