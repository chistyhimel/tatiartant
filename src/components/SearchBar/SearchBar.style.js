import styled from "styled-components";

export const SearchBarWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  visibility: ${({ searchBarOpen }) => (searchBarOpen ? "visiabel" : "hidden")};
  transition: visibility 0.3s ease-out;
`;

export const SearchBarContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top: 1px solid #ebebeb;
  position: fixed;
  transform: ${({ searchBarOpen }) =>
    searchBarOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  border-bottom: 1px solid lightgray;
`;

export const SearchBarContentWrap = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  padding: 15px 0;
  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 10px 0;
  }
  @media (max-width: 560px) {
    padding: 5px 0;
  }
  .icon {
    width: 5%;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
  input {
    width: 90%;
    height: 8vh;
    font-size: 20px;
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 1100px) {
      padding-left: 20px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
