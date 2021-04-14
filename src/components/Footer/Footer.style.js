import styled from "styled-components";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100vw;
  padding: 5% 0;

  @media (max-width: 560px) {
    padding-top: 40px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 560px) {
      width: 100%;
      margin-bottom: 10%;
    }
    p {
      font-size: 17px;
      margin-bottom: 20px;
    }
    .footer__titile_text {
      color: ${({ theme }) => theme.colors.footerTitleText};
      font-size: 15px;
      margin-bottom: 18px;
    }

    h3 {
      width: 100px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
    input {
      padding: 10px 12px;
      border-radius: none;
      border: 1px solid #e3dcdc;
      width: 100%;
      transition: border-color 0.1s ease-in-out;
      background: transparent;
      color: #fff;
      font-size: 16px;
      margin-bottom: 8%;
      &:focus {
        border: 1px solid ${({ theme }) => theme.colors.footerTitleText};
        border-radius: none;
      }
      ::placeholder {
        color: #fff;
      }
    }
  }
  .about__shop {
    @media (max-width: 1000px) {
    }
  }
  .footer__menu {
    @media (max-width: 560px) {
    }
  }
  .newsletter__section {
    @media (max-width: 1000px) {
      width: 100%;
    }
  }
  .copyright__section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 5%;
    @media (max-width: 560px) {
      flex-direction: column;
    }
    p {
      width: 50%;
      margin: 0;
      @media (max-width: 560px) {
        width: 100%;
        text-align: center;
        margin-bottom: 30px;
      }
    }
    .border {
      display: none;
      @media (max-width: 560px) {
        display: block;
        height: 0.2px;
        width: 100%;
        background-color: lightgray;
      }
    }
    h2 {
      width: 260px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      @media (max-width: 560px) {
        width: 80%;
        margin: 0 auto;
      }
    }
  }
`;
