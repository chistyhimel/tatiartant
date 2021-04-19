import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useLocation } from "react-router";
import { Container } from "../../constants/container";
import { FooterContainer, FooterContent } from "./Footer.style";
import paymentOptionsImg from "../../assets/images/payment-options.jpeg";

const Footer = () => {
  const { pathname } = useLocation();
  const history = useHistory();
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
              <p>
                Showroom Address: <br />
                Tati Ar Tant
                <br />
                Shop No: 62 and 71
                <br />
                Town Hall, Asad gate, Mohammadpur, Dhaka.
              </p>
              <p>Contact us : +8801737900666</p>
              <p>Email : tatiartant@gmail.com</p>
              <h3>
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() =>
                    window.open("https://www.facebook.com/tatiartant")
                  }
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  onClick={() =>
                    window.open("https://www.instagram.com/tati_ar_tant")
                  }
                />
                <FontAwesomeIcon icon={faTwitter} />
              </h3>
            </div>

            <div className="footer__menu">
              <br />
              <br />
              <p>Return & Enchanges</p>
              <p>Shipping</p>
              <p onClick={() => history.push("/")}>Terms of Service</p>
              <p onClick={() => history.push("/privacy-statement")}>
                Privacy Statement
              </p>
              <p onClick={() => history.push("/cookie-policy")}>
                Cookie Policy
              </p>
            </div>

            <div className="newsletter__section">
              <p className="footer__titile_text">Newsletter</p>
              <p>
                Subscribe to receive updates, access to <br /> exclusive deals,
                and more.
              </p>
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>
            <div className="copyright__section">
              <p>Copyright © Tati ar Tant . All Rights Reserved .</p>
              <div className="border" />
              <img src={paymentOptionsImg} alt="" />
            </div>
          </FooterContent>
        </Container>
      </FooterContainer>
    </>
  );
};

export default Footer;
