import React from "react";
import DropDownMenu from "./DropDownMenu";

function Link({ p, list, desktopOrMobile }) {
  return (
    <li className="link">
      <div className="link__mainContent">
        <p className="navBar__p">{p}</p>
        <img
          className="link__arrow"
          src={`./images/icon-arrow-${desktopOrMobile}.svg`}
          alt="arrow"
        />
      </div>
      <DropDownMenu list={list}/>
    </li>
  );
}

export default Link;
