import React from "react";
import { FooterWrapper, FooterLogo, FooterLinks, FooterLink } from "./style.js";
function Footer() {
  return (
    <footer>
      <img className="footer__logo" src="./images/logo.svg" alt="logo" />
      <ul className="footer__links">
        <li className="footer__link">Overview</li>
        <li className="footer__link">Pricing</li>
        <li className="footer__link">Marketplace</li>
        <li className="footer__link">Features</li>
        <li className="footer__link">Integration</li>
      </ul>
      <ul className="footer__links">
        <li className="footer__link">Team</li>
        <li className="footer__link">About</li>
        <li className="footer__link">Blog</li>
        <li className="footer__link">Careers</li>
      </ul>
      <ul className="footer__links">
        <li className="footer__link">Company</li>
        <li className="footer__link">Contact</li>
        <li className="footer__link">Newsletter</li>
        <li className="footer__link">Linkedin</li>
      </ul>
    </footer>
  );
}

export default Footer;
