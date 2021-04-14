import React from "react";
import {
  CardImgContainer,
  CardText,
  ProductCardConatiner,
  ProductCardContainerWrap,
} from "./ProductCard.style";
import img1 from "../../assets/images/model-img-1.png";
import img2 from "../../assets/images/model-img-1-hover.png";
import { useHistory } from "react-router";

const ProductCard = ({ img, idx }) => {
  const history = useHistory();
  return (
    <>
      <ProductCardConatiner onClick={() => history.push("/product-info")}>
        <CardImgContainer>
          <img src={img.img1} alt="" />
          <img src={img.img1Hover} alt="" />
        </CardImgContainer>
        <br />
        <CardText>Bagru Linen Silk Hand Block Printed Saree</CardText>
        <CardText>Bdt. 4250</CardText>
      </ProductCardConatiner>
    </>
  );
};

export default ProductCard;
