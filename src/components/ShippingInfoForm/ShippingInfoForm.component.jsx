import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import secondaryLogo from "../../assets/logos/logo-secondary.svg";
import primaryLogo from "../../assets/logos/logo-primary.svg";
import { CheckoutPageButton } from "../CheckoutContent/CheckoutContent.style";
import {
  CheckboxWrapper,
  InputWrap,
  ShippingAddress,
  ShippingInfoFormContainer,
} from "./ShippingInfoForm.style";
import { useTheme } from "styled-components";
import { useHistory } from "react-router";

const ShippingInfoForm = () => {
  const history = useHistory();
  const theme = useTheme();
  return (
    <>
      <ShippingInfoFormContainer>
        <div className="shipping__wrapper">
          <img
            src={
              theme.colors.primary === "#231f20" ? secondaryLogo : primaryLogo
            }
            alt="tatiartant"
            onClick={() => history.push("/")}
          />
          <h6>
            Cart <FontAwesomeIcon icon={faAngleRight} /> Information
            <FontAwesomeIcon icon={faAngleRight} /> Shipping
            <FontAwesomeIcon icon={faAngleRight} /> Payment
          </h6>
        </div>
        {/* 
        <div className="contact__info">
          <h1>Contact information</h1>
          <br />
          <h5>Already have an account ? Log in</h5>
        </div>
        <input type="text" /> */}

        {/* <CheckboxWrapper>
          <input type="checkbox" id="update_confirmation" />
          <label htmlFor="update_confirmation">
            Keep me up to date on news and exclusive offers
          </label>
        </CheckboxWrapper> */}
        <br />
        <ShippingAddress>
          <h1>Shipping Address</h1>
          <br />
          <input type="text" placeholder="Name" />
          <InputWrap>
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Email" />
          </InputWrap>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Apartment, suit, etc." />
          <InputWrap>
            <input type="text" placeholder="City" />

            <input type="text" placeholder="Postal code" />
          </InputWrap>
          <select id="cars">
            <option value="volvo">--- Select Payment Method ---</option>
            <option value="saab">Cash on delivery</option>
            <option value="opel">Payment</option>
          </select>
          <CheckoutPageButton type="submit">
            Continue to shipping
          </CheckoutPageButton>{" "}
          <small onClick={() => history.push("/cart")}>Return to cart</small>
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
