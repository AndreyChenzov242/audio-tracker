import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import ReactIcon from "../ReactIcon";
import "./style.scss";

function SearchBar(props) {
  const { onClick, setSearch } = props;
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    setSearch(searchInput);
  }, [searchInput, setSearch]);

  let timer;

  const handleChange = (event) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSearchInput(event.target.value);
    }, 1000);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__icon">
        <ReactIcon size="lg" color="grey">
          <ImSearch />
        </ReactIcon>
      </div>
      <input
        type="text"
        placeholder="search by songs, artists, albums, ets..."
        onClick={onClick}
        onFocus={onClick}
        onChange={handleChange}
        tabIndex="0"
      />
    </div>
  );
}

export default SearchBar;
