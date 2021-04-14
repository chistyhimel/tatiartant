import React from "react";
import {
  CartProductsSection,
  CheckoutContentContainer,
  CheckoutPageButton,
  CuponCodeSection,
  PriceCalcSection,
} from "./CheckoutContent.style";
import img from "../../assets/images/model-2.jpg";
import ShippingInfoForm from "../ShippingInfoForm/ShippingInfoForm.component";
const CheckoutContent = () => {
  return (
    <>
      <CheckoutContentContainer>
        <ShippingInfoForm />
        <CartProductsSection>
          <div className="cart_product">
            <img src={img} alt="" />
            <p>Dabu Kota Doria Silk Hand Block Printed Saree</p>
            <p>৳ 4400.00</p>
          </div>

          <div className="cart_product">
            <img src={img} alt="" />
            <p>Dabu Kota Doria Silk Hand Block Printed Saree</p>
            <p>৳ 4400.00</p>
          </div>

          <CuponCodeSection>
            <input type="text" placeholder="Gift card or discount code" />
            <CheckoutPageButton>Apply</CheckoutPageButton>
          </CuponCodeSection>

          <PriceCalcSection>
            <small>Subtotal</small>
            <p>৳ 4400.00</p>
          </PriceCalcSection>

          <PriceCalcSection>
            <small>Shipping</small>
            <p>৳ 4400.00</p>
          </PriceCalcSection>
          <br />
          <hr />
          <br />
          <PriceCalcSection>
            <small>Shipping</small>
            <h2>৳ 4400.00</h2>
          </PriceCalcSection>
        </CartProductsSection>
      </CheckoutContentContainer>
    </>
  );
};

export default CheckoutContent;
