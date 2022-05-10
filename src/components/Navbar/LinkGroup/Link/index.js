import React from "react";
import { NavLink } from "react-router-dom";
import SwitchIcon from "../../../SwitchIcon";

function Link(props) {
  const { link, isTextMuted } = props;
  const textMuted = isTextMuted ? "text-muted" : "";
  const iconSize = isTextMuted ? "xl" : "lg";

  return (
    <li className={"navbar__item " + textMuted}>
      <NavLink to={link.url}>
        <SwitchIcon
          name={link.name}
          size={iconSize}
          className={"navbar__icon " + textMuted}
        />
        <span className={"navbar__text " + textMuted}>{link.name}</span>
      </NavLink>
    </li>
  );
}

export default Link;
