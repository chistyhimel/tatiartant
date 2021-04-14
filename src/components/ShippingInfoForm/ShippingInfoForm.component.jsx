import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo.svg";
import { CheckoutPageButton } from "../CheckoutContent/CheckoutContent.style";
import {
  CheckboxWrapper,
  InputWrap,
  ShippingAddress,
  ShippingInfoFormContainer,
} from "./ShippingInfoForm.style";

const ShippingInfoForm = () => {
  return (
    <>
      <ShippingInfoFormContainer>
        <div className="shipping__wrapper">
          <img src={logo} alt="" />
          <h6>
            Cart <FontAwesomeIcon icon={faAngleRight} /> Information
            <FontAwesomeIcon icon={faAngleRight} /> Shipping
            <FontAwesomeIcon icon={faAngleRight} /> Payment
          </h6>
        </div>

        <div className="contact__info">
          <h1>Contact information</h1>
          <br />
          <h5>Already have an account ? Log in</h5>
        </div>

        <input type="text" />
        <CheckboxWrapper>
          <input type="checkbox" id="update_confirmation" />
          <label htmlFor="update_confirmation">
            Keep me up to date on news and exclusive offers
          </label>
        </CheckboxWrapper>

        <ShippingAddress>
          <h1>Shipping address</h1>
          <br />
          <InputWrap>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </InputWrap>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Apartment, suit, etc." />
          <input type="text" placeholder="City" />
          <InputWrap>
            <select id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <input type="text" placeholder="Postal code" />
          </InputWrap>
          <input type="text" placeholder="Phone" />
          <CheckboxWrapper>
            <input type="checkbox" id="update_confirmation" />
            <label htmlFor="update_confirmation">
              Keep me up to date on news and exclusive offers
            </label>
          </CheckboxWrapper>
          <CheckoutPageButton type="submit">
            Continue to shipping
          </CheckoutPageButton>{" "}
          <small>Return to cart</small>
        </ShippingAddress>
        <br />
        <hr />
        <br />
        <small>Refund policy Privacy policy Terms of service</small>
      </ShippingInfoFormContainer>
    </>
  );
};

export default ShippingInfoForm;
