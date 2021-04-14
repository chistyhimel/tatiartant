import styled from "styled-components";

export const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  z-index: 99;
  color: #fff;
  padding: 10px 0;
  font-size: 14px;
  p {
    @media (max-width: 768px) {
      margin: 0 auto;
      width: 95%;
      font-size: 10px;
    }
    @media (max-width: 560px) {
      font-size: 8px;
    }
  }
`;

export const NavBarContainerWrap = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  z-index: 10;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ebebeb;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  margin: 0 auto;
  padding: 0.9% 0;

  @media (max-width: 1100px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    position: relative;
    padding: 15px 0;
    flex-direction: row-reverse;
  }

  .nav__logo {
    width: 75px;
    height: 75px;
    cursor: pointer;

    @media (max-width: 768px) {
      margin-left: -50px;
    }
    @media (max-width: 560px) {
      width: 65px;
      height: 65px;
    }
  }
  .hamburger__icon {
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-size: 25px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const NavbarIconsContainer = styled.div`
  color: red;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    & > :nth-child(1) {
      display: none;
    }
  }
  img {
    width: 22px;
    height: auto;
    cursor: pointer;
    margin-left: 20px;

    @media (max-width: 768px) {
      margin-left: 0px;
      margin-right: 20px;
    }
    @media (max-width: 560px) {
      width: 20px;
      height: auto;
    }
  }
`;

export const NavItemsContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 350px;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    display: none;
  }

  p {
    cursor: pointer;
    &::after {
      content: "";
      display: block;
      margin: 0 auto;
      margin-top: 15px;
      width: 0;
      height: 2.2px;
      background: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
