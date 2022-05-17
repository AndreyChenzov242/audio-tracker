import React from "react";
import { ImHeadphones } from "react-icons/im";
import { FaIndent } from "react-icons/fa";
import ReactIcon from "../ReactIcon";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import SearchBar from "../SearchBar";
import "./styles.scss";

function Header(props) {
  const { textMuted, toggleTextMuted, setSearch } = props;

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
      <SearchBar onClick={routeChange} setSearch={setSearch} />
      <div className="header__auth">sign in</div>
    </div>
  );
}

export default Header;
