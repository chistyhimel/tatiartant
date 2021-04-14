import {
  faCcAmazonPay,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation } from "react-router";
import { Container } from "../../constants/container";
import SecondaryButton from "../Buttons/SecondaryButton.component";
import { FooterContainer, FooterContent } from "./Footer.style";

const Footer = () => {
  const { pathname } = useLocation();
  return pathname === "/checkout" ? null : (
    <>
      <FooterContainer>
        <Container>
          <FooterContent>
            <div className="about__shop">
              <p className="footer__titile_text">About the shop</p>
              <p>
                Explore unique handcrafted products from the finest <br />{" "}
                artisans of Bangladesh.
              </p>
              <p>Contact us: +880 xxxxxxxxxx</p>
              <p>Email: hello@taati-ar-taat.com</p>
              <h3>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
              </h3>
            </div>

            <div className="footer__menu">
              <p className="footer__titile_text">Footer Menu</p>
              <p>Search</p>
              <p>Return & Enchanges</p>
              <p>Shipping</p>
              <p>Terms of Service</p>
              <p>Privacy Statement</p>
            </div>

            <div className="newsletter__section">
              <p className="footer__titile_text">Newsletter</p>
              <p>
                Subscribe to receive updates, access to <br /> exclusive deals,
                and more.
              </p>
              <input type="text" placeholder="Enter your email address" />
              <SecondaryButton>Subscribe</SecondaryButton>
            </div>
            <div className="copyright__section">
              <p>Copyright © Taati ar Taat. All Rights Reserved</p>
              <div className="border" />
              <h2>
                <FontAwesomeIcon icon={faCcMastercard} />
                <FontAwesomeIcon icon={faCcVisa} />
                <FontAwesomeIcon icon={faCcPaypal} />
                <FontAwesomeIcon icon={faCcAmazonPay} />
                <FontAwesomeIcon icon={faCcApplePay} />
              </h2>
            </div>
          </FooterContent>
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
