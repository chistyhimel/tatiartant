import React from "react";
import { CartContentProductContainer } from "./CartContent.style";
import modelImg from "../../assets/images/model-images/model-1.jpg";
import QuantitySelectorBox from "../QuantitySelectorBox/QuantitySelectorBox.component";

const CartContentProduct = () => {
  return (
    <>
      <CartContentProductContainer>
        <section>
          <img src={modelImg} alt="" />
          <p>
            Dabu Kota Doria Silk Hand Block Printed Saree <br />
            Tk. 4,250
          </p>
        </section>

        <QuantitySelectorBox />
        <p>৳ 4400</p>
      </CartContentProductContainer>
    </>
  );
};

export default CartContentProduct;
