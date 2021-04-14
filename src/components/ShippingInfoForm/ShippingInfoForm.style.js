import styled from "styled-components";

export const ShippingInfoFormContainer = styled.div`
  padding-left: 15%;
  padding-right: 3%;
  padding-bottom: 3%;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1100px) {
    padding-left: 10%;
    padding-right: 2%;
  }
  @media (max-width: 900px) {
    padding-left: 5%;
    padding-right: 2%;
  }
  @media (max-width: 768px) {
    padding: 0;
  }
  .contact__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;

    @media (max-width: 768px) {
      margin-top: 20px;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .shipping__wrapper {
    @media (max-width: 768px) {
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    img {
      height: 80px;
      width: 80px;
      display: block;
      margin: 0 auto;
      padding-bottom: 25px;
    }

    h6 {
      text-align: center;
      padding-bottom: 20px;
      margin: 0 auto;
      width: 250px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }

  small {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
  }

  input {
    height: 46px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    padding: 15px;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  input {
    width: 48%;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    padding: 15px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  select {
    width: 48%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: none;
    border: 1px solid lightgray;
    outline: none;
    height: 46px;
    padding: 0 15px;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const CheckboxWrapper = styled.div`
  input[type="checkbox"] {
    margin-right: 15px;
    width: 15px;
    height: 15px;
  }
  label {
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;

export const ShippingAddress = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }

  small {
    display: inline;
    margin-left: 30px;
  }
`;
