import React from "react";
import { Container } from "../../constants/container";
import ProductCard from "../ProductCard/ProductCard.component";
import { SearchedProductsContainer } from "./SearchBar.style";

function SearchedProducts({ searchResults }) {
  console.log(searchResults);
  let product = searchResults;
  return (
    <>
      <Container>
        <SearchedProductsContainer>
          {searchResults.length
            ? searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </SearchedProductsContainer>
      </Container>
    </>
  );
}

export default SearchedProducts;
