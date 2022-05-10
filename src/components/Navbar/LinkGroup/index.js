import React from "react";
import Link from "./Link";

function LinkGroup(props) {
  const { links, isTextMuted } = props;
  return (
    <>
      {links.map((link, index) => (
        <Link link={link} key={index} isTextMuted={isTextMuted} />
      ))}
    </>
  );
}

export default LinkGroup;
