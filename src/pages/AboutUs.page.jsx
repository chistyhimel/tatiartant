import React from "react";
import styled from "styled-components";
import img1 from "../assets/images/banner-images/banner-img1.png";
import img2 from "../assets/images/banner-images/banner-img2.jpg";

const AboutUsContainer = styled.div`
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
  p {
    margin-top: 30px;
  }
  img {
    width: 60%;
    display: block;
    margin: 0 auto;
    padding-bottom: 5%;
  }
`;

const AboutUs = () => {
  return (
    <>
      <AboutUsContainer>
        <h1>About Us</h1>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <p>
          <strong>TAATI AR TAAT</strong> seeks to bring to you the timeless
          culture of the Indian handmade clothing. Our aim is to display and
          make accessible our rich,vivid and timeless collection of the Indian
          handloom and handicrafts from the hinterlands of Bangladesh. <br />
          <br />
          <strong>
            Our brand is co-founded by the mother-daughter duo Hetal Desai
            (Chief Creative Designer) & Lekhinee Desai (sales & marketing), both
            ardent handloom lovers!
          </strong>
          <br />
          <br />
          While both have no formal degree in fashion (Lekhinee is a profession
          Odissi dancer & MBA, Marketing from NMIMS,Mumbai and Hetal has done
          her Masters in Home Science from MS University, Baroda), it's only
          their pure love and passion for Indian handloom and handicrafts that
          has led them start this venture about 2 years ago. We are a small
          brand working out of our home in Santacruz west but are proud that we
          have been able to touch the lives of many artisans(big & small) by
          connecting them through our designs with our Instagram and Facebook
          family of 55k in just 2 years.
          <br />
          <br />
          Our attempt is to showcase traditional yet contemporary designs using
          natural dyed, handwoven fabrics. Over the 2 years we have worked with
          not only master artisans like Sufiyan Khatri, Abdul Jabbar Khatri to
          name a few but also supported small scale artisans in our endeavour to
          further our brand and also uplift the community that we work along
          with.
        </p>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
