import React from "react";
import { ProductCardSecondaryContainer } from "./ProductCardSecondary.style";
import modelImg from "../../assets/images/model-2.jpg";
import SecondaryButton from "../Buttons/SecondaryButton.component";
import { IMG_BASE_URL } from "../../requests/api";
import { useHistory } from "react-router";
const ProductCardSecondary = ({ categoryInfo }) => {
  const { name, id, photo } = categoryInfo;
  const history = useHistory();

  const goToProductPage = (categoryName, id) => {
    history.push(`/products/${categoryName}/${id}`);
  };

  return (
    <>
      <ProductCardSecondaryContainer>
        <img src={photo && `${IMG_BASE_URL}/categories/${photo}`} alt="" />
        <div className="img__overlay">
          <div className="overlay__content">
            <p>{name}</p>
            <span onClick={() => goToProductPage("category_id", id)}>
              <SecondaryButton>Shop Now</SecondaryButton>
            </span>
          </div>
        </div>
      </ProductCardSecondaryContainer>
    </>
  );
};

export default ProductCardSecondary;
