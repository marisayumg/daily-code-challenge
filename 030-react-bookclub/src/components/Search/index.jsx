import React, { useRef, useState } from "react";
import { SearchContainer, Input, SearchIcon, Wrapper } from "./styles";
import { Close } from "../../styles";

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);
  const [showOnDesktop, setShowOnDesktop] = useState(false);

  const handleChange = (event) => {
    filterBooks(event.target.value);
  };

  const clearSearch = () => {
    filterBooks("");
    inputEl.current.value = "";
    setShowOnDesktop(false);
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <SearchIcon onClick={showSearch} />
        <Input
          ref={inputEl}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search title or author"
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  );
};

export default Search;
