import styled from "styled-components";

export const PrimaryButtonContainer = styled.div`
  margin: 0 auto;
  width: fit-content;
  cursor: pointer;
  div {
    display: block;
    position: relative;
    margin: 0 auto;
    text-decoration: none;
    background: ${({ theme }) => theme.colors.primary};
    padding: 14px 28px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-size: 16px;
    overflow: hidden;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &::after,
    &::before {
      content: " ";
      display: block;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.secondary};
      z-index: -1;
    }
    span {
      z-index: 5;
      position: relative;
      transition: color 350ms ease;
    }
    &:hover span {
      color: ${({ theme }) => theme.colors.primary};
    }
    &::before {
      transform: translateX(-101%);
      z-index: 1;
    }
    &:hover:before {
      transform: translateX(0);
      transition: transform 350ms ease;
    }

    &::after {
      z-index: 0;
      transform: translateX(101%);
      transition: none;
      transition: transform 350ms ease;
    }

    &:hover:after {
      opacity: 1;
      transform: translateX(0);
      transition: transform 350ms 360ms ease;
    }
  }
`;

export const SecondaryButtonContainer = styled.div`
  text-align: center;
  width: fit-content;
  cursor: pointer;
  a {
    display: block;
    position: relative;
    margin: 0 auto;
    text-decoration: none;
    background: transparent;
    padding: 14px 28px;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    text-transform: uppercase;
    font-size: 16px;
    overflow: hidden;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 560px) {
      font-size: 10px;
      border: none;
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }

    &::after,
    &::before {
      content: " ";
      display: block;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.secondary};
      z-index: -1;
    }
    span {
      z-index: 5;
      position: relative;
      transition: color 350ms ease;
    }
    &:hover span {
      color: ${({ theme }) => theme.colors.primary};
    }
    &::before {
      transform: translateX(-101%);
      z-index: 1;
    }
    &:hover:before {
      transform: translateX(0);
      transition: transform 350ms ease;
    }

    &::after {
      z-index: 0;
      transform: translateX(101%);
      transition: none;
      transition: transform 350ms ease;
    }

    &:hover:after {
      opacity: 1;
      transform: translateX(0);
      transition: transform 350ms 360ms ease;
    }
  }
`;

export const TertiaryButtonContainer = styled.div`
  text-align: center;
  width: fit-content;
  cursor: pointer;
  a {
    display: block;
    position: relative;
    margin: 0 auto;
    text-decoration: none;
    background: transparent;
    padding: 14px 28px;
    border: 1px solid rgba(77, 70, 70, 0.2);
    text-transform: uppercase;
    font-size: 16px;
    overflow: hidden;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &::after,
    &::before {
      content: " ";
      display: block;
      position: absolute;
      width: 100%;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.primary};
      z-index: -1;
    }
    span {
      z-index: 5;
      position: relative;
      transition: color 350ms ease;
    }
    &:hover span {
      color: ${({ theme }) => theme.colors.secondary};
    }
    &::before {
      transform: translateX(-101%);
      z-index: 1;
    }
    &:hover:before {
      transform: translateX(0);
      transition: transform 350ms ease;
    }

    &::after {
      z-index: 0;
      transform: translateX(101%);
      transition: none;
      transition: transform 350ms ease;
    }

    &:hover:after {
      opacity: 1;
      transform: translateX(0);
      transition: transform 350ms 360ms ease;
    }
  }
`;
