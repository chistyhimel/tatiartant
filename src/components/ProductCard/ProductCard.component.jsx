import React from "react";
import {
  CardImgContainer,
  CardText,
  ProductCardConatiner,
} from "./ProductCard.style";
import { useHistory } from "react-router";
import { IMG_BASE_URL } from "../../requests/api";

const ProductCard = ({ product, setSearchBarOpen }) => {
  const history = useHistory();
  let { id, name, galleries, photo, price } = product;
  // console.log(galleries);

  const goToProductInfoPage = (productId) => {
    history.push(`/product-info/${productId}`);
    if (setSearchBarOpen) {
      setSearchBarOpen(false);
    }
  };

  return (
    <>
      <ProductCardConatiner onClick={() => goToProductInfoPage(id)}>
        <CardImgContainer>
          <img src={`${IMG_BASE_URL}/products/${photo}`} alt="" />
          <img
            src={
              galleries && galleries.length
                ? `${IMG_BASE_URL}/galleries/${galleries[0].photo}`
                : `${IMG_BASE_URL}/products/${photo}`
            }
            alt=""
          />
        </CardImgContainer>
        <br />
        <CardText>{name}</CardText>
        <small>Bdt. {price}</small>
      </ProductCardConatiner>
    </>
  );
};

export default ProductCard;
