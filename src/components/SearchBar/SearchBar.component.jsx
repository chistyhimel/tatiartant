import React, { useEffect, useState } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../constants/container";
import {
  SearchBarContainer,
  SearchBarContentWrap,
  SearchBarWrap,
} from "./SearchBar.style";
import { SEARCH_PRODUCTS } from "../../requests/services";
import SearchedProducts from "./SearchedProducts.component";

const SearchBar = ({ searchBarState }) => {
  const [searchBarOpen, setSearchBarOpen] = searchBarState;
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  let searchBarRef = useClickOutside(() => {
    setSearchBarOpen(false);
  });

  useEffect(() => {
    if (searchTerm) {
      const data = { name: searchTerm };
      SEARCH_PRODUCTS(data).then((response) => {
        setSearchResults(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <>
      <SearchBarWrap searchBarOpen={searchBarOpen}>
        <SearchBarContainer searchBarOpen={searchBarOpen} ref={searchBarRef}>
          <Container>
            <SearchBarContentWrap>
              <FontAwesomeIcon icon={faSearch} className="icon" />
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className="icon"
                onClick={() => setSearchBarOpen(false)}
              />
            </SearchBarContentWrap>
          </Container>

          {/* -------Searched Products------- */}
          {searchResults.length ? (
            <SearchedProducts searchResults={searchResults} />
          ) : null}
        </SearchBarContainer>
      </SearchBarWrap>
    </>
  );
};

export default SearchBar;
