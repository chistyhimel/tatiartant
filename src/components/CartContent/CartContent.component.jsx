import React from "react";
import { useHistory } from "react-router";
import CartProduct from "../CartProduct/CartProduct.component";
import {
  CartContentContainer,
  CartContentWrap,
  CartPageButton,
  EstimateShipping,
  ProductCartContainer,
} from "./CartContent.style";
import CartContentProduct from "./CartContentProduct";

const CartContent = () => {
  const history = useHistory();

  return (
    <>
      <CartContentWrap>
        <CartContentContainer>
          <h1>Cart</h1>
          <br />
          <p>You are eligible for free shipping!</p>

          <ProductCartContainer>
            <div className="product__table__title">
              <p>Pruduct</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>

            <CartContentProduct />
            <CartContentProduct />
            <CartContentProduct />

            <div className="product__subtotal__section">
              <section>
                <p>
                  Receive order notifications via WhatsApp:
                  <br /> WhatsApp Number: <input type="text" />
                </p>
              </section>

              <section>
                <label htmlFor="note">Add order note : </label>
                <br />
                <textarea name="" id="note" cols="30" rows="5"></textarea>
              </section>

              <section>
                <p>
                  Total: Bdt. 8,650
                  <br />
                  Shipping & taxes calculated at checkout
                </p>
                <CartPageButton onClick={() => history.push("/checkout")}>
                  Checkout
                </CartPageButton>
              </section>
            </div>
          </ProductCartContainer>

          <EstimateShipping>
            <form>
              <fieldset>
                <legend>Estimate shipping</legend>
                <select>
                  <option value="0">United States</option>
                  <option value="1">India</option>
                  <option value="2">Pakistan</option>
                </select>
                <input type="text" />
                <input type="text" placeholder="Zip Code" />
                <CartPageButton type="submit">ESTIMATE</CartPageButton>
              </fieldset>
            </form>
          </EstimateShipping>
        </CartContentContainer>
      </CartContentWrap>
    </>
  );
};

export default CartContent;
