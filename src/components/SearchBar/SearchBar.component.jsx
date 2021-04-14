import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "../../constants/container";
import {
  SearchBarContainer,
  SearchBarContentWrap,
  SearchBarWrap,
} from "./SearchBar.style";

const SearchBar = ({ searchBarState }) => {
  const [searchBarOpen, setSearchBarOpen] = searchBarState;

  let searchBarRef = useClickOutside(() => {
    setSearchBarOpen(false);
  });

  return (
    <>
      <SearchBarWrap searchBarOpen={searchBarOpen}>
        <SearchBarContainer searchBarOpen={searchBarOpen} ref={searchBarRef}>
          <Container>
            <SearchBarContentWrap>
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input type="text" placeholder="Search..." />
              <FontAwesomeIcon
                icon={faTimes}
                className="icon"
                onClick={() => setSearchBarOpen(false)}
              />
            </SearchBarContentWrap>
          </Container>
        </SearchBarContainer>
      </SearchBarWrap>
    </>
  );
};

export default SearchBar;
