import React from "react";
import styled from "styled-components";

const ContactUsContainer = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    width: 90vw;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    margin: 5% 0;
  }
`;

const ContactUs = () => {
  return (
    <>
      <ContactUsContainer>
        <h1>Contact Us</h1>
        <p>
          Hello, our fellow handloom lovers! <br />
          <br />
          We are here to help you. We are friendly and available from 11am to
          8pm for any kind of assistance related to our brand.
          <br />
          <br />
          Feel free to drop in an email or call/message/WhatsApp on the
          following details and we will ensure we get back to you the fastest we
          can! <br />
          <br />
          hello@theindianethnicco.com
          <br />
          <br />
          <strong>+91 8928216156</strong> <br />
          <br />
          PLEASE BEWARE OF FRAUD WEBSITES OPERATING UNDER SIMILAR NAMES like
          ours with the url of www.indianethniconline.in or
          www.indianethniconline.com or www.indianethnichub.com | Our brand's
          name is THE INDIAN ETHNIC CO. spelled exactly in this manner. Fake
          brands like INDIAN ETHNIC ONLINE, ETHNIC INDIA, ETHNIC INDIAN ONLINE,
          INDIAN ETHNIC HUB is not us | We will not be able to help you if you
          contact us for orders placed on the above mentioned fake websites. We
          do not sell sarees, kurtas or shararas in the range of Rs 499/599/999
          | Once you go through our website you will realise that the website &
          the products look nothing similar to these fraud website. You are
          requested to directly file a police complaint or report it as cyber
          crime. Our order number starts with #TIECO1 & any order number that
          does not start in this format DOES NOT BELONG TO US!
          <br />
          <br />
          <u>www.facebook.com/</u> <br />
          <br />
          <u>https://www.instagram.com/ </u> <br />
          <br />
          <strong>
            <u>Address:</u>
          </strong>{" "}
          <br />
          <br />
          The Indian Ethnic Co.,
          <br />
          <br />
          Lekhinee Desai
          <br />
          <br />
          B/5,41,Khira Nagar, SV Road, Santacruz West,Mumbai-400054 <br />
          <br />
          Happy Handloom Shopping!
        </p>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
