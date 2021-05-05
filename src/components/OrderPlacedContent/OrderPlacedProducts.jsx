import React from "react";
import { OrderPlacedProductContainer } from "./OrderPlacedContent.style";

function OrderPlacedProducts({ product }) {
  return (
    <>
      <OrderPlacedProductContainer>
        <img src="" alt="" />
        <div>
          <p>Name:</p>

          <small>Size:</small>

          <small>Colour:</small>

          <small>Qty:</small>
        </div>
      </OrderPlacedProductContainer>
    </>
  );
}

export default OrderPlacedProducts;
