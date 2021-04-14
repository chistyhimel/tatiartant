import React from "react";
import { ProductCardSecondaryContainer } from "./ProductCardSecondary.style";
import modelImg from "../../assets/images/model-2.jpg";
import SecondaryButton from "../Buttons/SecondaryButton.component";
const ProductCardSecondary = () => {
  return (
    <>
      <ProductCardSecondaryContainer>
        <img src={modelImg} alt="" />
        <div className="img__overlay">
          <div className="overlay__content">
            <p>Kurtas</p>
            <SecondaryButton>Shop Now</SecondaryButton>
          </div>
        </div>
      </ProductCardSecondaryContainer>
    </>
  );
};

export default ProductCardSecondary;
