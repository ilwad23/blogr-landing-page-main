import React from "react";
import { FooterWrapper, FooterLogo, FooterLinks, FooterLink } from "./style.js";
import "../../app.css";
function Footer({ desktopOrMobile }) {
  return (
    <FooterWrapper>
      <FooterLogo src="./images/logo.svg" alt="logo" />
      <FooterLinks >
        <FooterLink >Overview</FooterLink>
        <FooterLink>Pricing</FooterLink>
        <FooterLink>Marketplace</FooterLink>
        <FooterLink>Features</FooterLink>
        <FooterLink>Integration</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink>Team</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Blog</FooterLink>
        <FooterLink>Careers</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink>Company</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Newsletter</FooterLink>
        <FooterLink>Linkedin</FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
}

export default Footer;
