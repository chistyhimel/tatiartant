import React from "react";
import { CartProductContainer } from "./CartProduct.style";
import img from "../../assets/images/model-img-1.png";
import QuantitySelectorBox from "../QuantitySelectorBox/QuantitySelectorBox.component";

const CartProduct = () => {
  return (
    <>
      <CartProductContainer>
        <div className="left">
          <img src={img} alt="" />
        </div>
        <div className="right">
          <h6>3 Pcs Sitara Neela Bandhej Suit Set</h6>
          {/* <h6>M</h6> */}
          <h6>Bdt. 1295</h6>
          <QuantitySelectorBox />
        </div>
      </CartProductContainer>
    </>
  );
};

export default CartProduct;
