import React from "react";
import Link from "./Link";

function Links({ desktopOrMobile }) {
  return (
    <ul className="links">
      <Link
        p="Product"
        list={["Overview", "Pricing", "Marketplace", "Features", "Integration"]}
        desktopOrMobile={desktopOrMobile}
      />
      <Link
        p="Connect"
        list={["About", "Team", "Blog", "Careers"]}
        desktopOrMobile={desktopOrMobile}
      />
      <Link
        p="Company"
        list={["Contact", "Newsletter", "Linkedin"]}
        desktopOrMobile={desktopOrMobile}
      />
    </ul>
  );
}

export default Links;
