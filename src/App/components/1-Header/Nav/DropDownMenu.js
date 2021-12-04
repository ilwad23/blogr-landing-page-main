import React from "react";

function DropDownMenu({ list }) {
  return (
    <ul className="dropDownMenu">
      {list.map((item) => (
        <li key={item} className="dropDownMenu__listItem">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DropDownMenu;
