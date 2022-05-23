import React from "react";
import { links } from "../../constants/links";
import LinkGroup from "./LinkGroup";
import "./styles.scss";

function Navbar(props) {
  const { isTextMuted, isActiveNavbar, turnOffNavbar } = props;
  const textMuted = isTextMuted ? "text-muted" : "";
  const active = isActiveNavbar ? "active" : "";

  return (
    <nav className={"navbar " + textMuted + active}>
      <ul className={"navbar__list " + textMuted}>
        <li className={"navbar__title " + textMuted}>Discover</li>
        <LinkGroup
          links={links.discover}
          isTextMuted={isTextMuted}
          onClick={turnOffNavbar}
        />
      </ul>
      <ul className={"navbar__list " + textMuted}>
        <li className={"navbar__title " + textMuted}>Playlist</li>
        <LinkGroup
          links={links.playList}
          isTextMuted={isTextMuted}
          onClick={turnOffNavbar}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
