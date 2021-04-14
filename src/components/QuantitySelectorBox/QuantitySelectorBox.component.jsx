import React, { useState } from "react";
import {
  QuantitySelectorBoxContainer,
  QuantitySelectorWrap,
} from "./QuantitySelectorBox.style";

const QuantitySelectorBox = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <QuantitySelectorWrap>
        <QuantitySelectorBoxContainer>
          <button onClick={() => setQuantity(quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QuantitySelectorBoxContainer>
        <u>Remove</u>
      </QuantitySelectorWrap>
    </>
  );
};

export default QuantitySelectorBox;
