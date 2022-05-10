import React from "react";
import { links } from "../../constants/links";
import LinkGroup from "./LinkGroup";

import "./styles.scss";

function Navbar(props) {
  const isTextMuted = props.textMuted;
  const textMuted = isTextMuted ? "text-muted" : "";

  return (
    <nav className={[`navbar ${textMuted}`]}>
      <ul className={"navbar__list " + textMuted}>
        <li className={"navbar__title " + textMuted}>Discover</li>
        <LinkGroup links={links.discover} isTextMuted={isTextMuted} />
      </ul>
      <ul className={"navbar__list " + textMuted}>
        <li className={"navbar__title " + textMuted}>Playlist</li>
        <LinkGroup links={links.playList} isTextMuted={isTextMuted} />
      </ul>
    </nav>
  );
}

export default Navbar;
