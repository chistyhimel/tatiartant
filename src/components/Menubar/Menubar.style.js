import styled from "styled-components";

export const MenubarWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  top: 0;
  visibility: ${({ mobileMenubar }) => (mobileMenubar ? "visiabel" : "hidden")};
  transition: visibility 0.3s ease-out;
`;

export const MenubarContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  position: fixed;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 250px;
  z-index: 11;
  transform: ${({ mobileMenubar }) =>
    mobileMenubar ? "translateX(0)" : "translateX(120%)"};
  transition: transform 0.3s ease-in-out;
  padding: 18px 24px 0 18px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuItemsContainer = styled.div`
  overflow-y: scroll;
  z-index: 1;
  h1 {
    font-size: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    width: fit-content;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    font-size: 15px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MenubarSocilMediaIcons = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 2;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
`;

// ------------------SubmenuBar------------------//

export const SubmenuContainer = styled.div`
  width: 100%;
  display: ${({ openSubMenu }) => (openSubMenu ? "block" : "none")};
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  -webkit-transition: 0.2s linear;
  -moz-transition: 0.2s linear;
  -ms-transition: 0.2s linear;
  -o-transition: 0.2s linear;
  transition: 0.2s linear;

  p {
    padding-left: 20px;
    border: none;
    margin: 0;
    text-transform: capitalize;
  }
`;

// ------------------ChildmenuBar------------------//

export const ChildMenuContainer = styled.div`
  transform: ${({ childMenuOpen }) =>
    childMenuOpen ? "scaleY(1)" : "scaleY(0)"};
  transform-origin: top;
  transition: transform 0.26s ease;

  p {
    padding-left: 40px;
    border: none;
    margin: 0;
    text-transform: capitalize;
  }
`;
