import React from "react";
import { Container } from "../../constants/container";
import ProductCardSecondary from "../ProductCardSecondary/ProductCardSecondary.component";
import { ProductCategoryContainer } from "./ProductCategory.style";

const ProductCategory = () => {
  return (
    <>
      <Container>
        <ProductCategoryContainer>
          <ProductCardSecondary />
          <ProductCardSecondary />
          <ProductCardSecondary />
          <ProductCardSecondary />
        </ProductCategoryContainer>
      </Container>
    </>
  );
};

export default ProductCategory;
