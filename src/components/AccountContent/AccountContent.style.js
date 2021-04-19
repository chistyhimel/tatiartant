import styled from "styled-components";

export const AccountContainer = styled.div`
  width: 70vw;
  margin: 5% auto;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 1100px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 95vw;
    margin: 25px auto;
  }

  div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    hr {
      margin-top: 12px;
    }

    section {
      width: 70%;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    aside {
      width: 25%;
      @media (max-width: 768px) {
        width: 100%;
      }
      & > :last-child {
        div {
          font-size: 14px;
        }
      }
    }
  }
`;
