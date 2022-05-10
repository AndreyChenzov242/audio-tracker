import React from "react";
import { ImHeadphones, ImSearch } from "react-icons/im";
import { FaIndent } from "react-icons/fa";
import ReactIcon from "../ReactIcon";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./styles.scss";

function Header(props) {
  const { textMuted, toggleTextMuted } = props;

  const logoClass = classNames({
    [`logo`]: true,
    [`text-muted`]: textMuted,
  });

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(`search`);
  };

  return (
    <div className="header">
      <a href="/" className={logoClass}>
        <ReactIcon className="logo__icon" size="xxl">
          <ImHeadphones />
        </ReactIcon>
        <div className="logo__title">Music</div>
      </a>
      <button
        className="sidebar-toggle"
        onClick={() => {
          toggleTextMuted();
        }}
      >
        <ReactIcon size="lg" color="grey">
          <FaIndent />
        </ReactIcon>
      </button>
      <div className="search-bar">
        <div className="search-bar__icon">
          <ReactIcon size="lg" color="grey">
            <ImSearch />
          </ReactIcon>
        </div>
        <input
          type="text"
          placeholder="search by songs, artists, albums, ets..."
          onClick={routeChange}
        />
      </div>
      <div className="header__auth">sign in</div>
    </div>
  );
}

export default Header;
