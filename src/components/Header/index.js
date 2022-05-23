import React from "react";
import { ImHeadphones } from "react-icons/im";
import { FaIndent } from "react-icons/fa";
import ReactIcon from "../ReactIcon";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import "./styles.scss";

function Header(props) {
  const {
    isTextMuted,
    toggleIsTextMuted,
    setSearch,
    toggleIsActiveNavbar,
    turnOffNavbar,
  } = props;

  const textMuted = isTextMuted ? "text-muted" : "";

  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`search`);
  };

  const handleSearchClick = () => {
    routeChange();
    turnOffNavbar();
  };

  return (
    <div className="header">
      <a href="/" className={"logo " + textMuted}>
        <ReactIcon className="logo__icon" size="xxl">
          <ImHeadphones />
        </ReactIcon>
        <div className="logo__title">Music</div>
      </a>
      <button
        className="toggle-text-muted"
        onClick={() => {
          toggleIsTextMuted();
        }}
      >
        <ReactIcon size="lg" color="grey">
          <FaIndent />
        </ReactIcon>
      </button>
      <SearchBar
        onClick={handleSearchClick}
        setSearch={setSearch}
        turnOffNavbar={turnOffNavbar}
      />
      <button
        className="sidebar-toggle"
        onClick={() => {
          toggleIsActiveNavbar();
        }}
      >
        <ReactIcon size="xl">
          <FaIndent />
        </ReactIcon>
      </button>
    </div>
  );
}

export default Header;
