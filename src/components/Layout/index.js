import React, { useState } from "react";

import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./styles.scss";

function Layout() {
  const [textMuted, setTextMuted] = useState(false);

  function toggleTextMuted() {
    setTextMuted(!textMuted);
  }

  return (
    <div>
      <Header textMuted={textMuted} toggleTextMuted={toggleTextMuted} />
      <div className="content-wrapper">
        <Navbar textMuted={textMuted} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
