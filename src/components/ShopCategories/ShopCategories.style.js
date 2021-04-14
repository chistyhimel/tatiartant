import styled from "styled-components";

export const ShopCategoriesWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  visibility: ${({ shopCategoriesOpen }) =>
    shopCategoriesOpen ? "visiabel" : "hidden"};
  transition: visibility 0.3s ease-out;
`;

export const ShopCategoriesContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  z-index: 5;

  border-bottom: 1px solid lightgray;
`;

export const ShopCategoriesContent = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-around;

  div {
    small {
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 10px;
    }
  }
`;
