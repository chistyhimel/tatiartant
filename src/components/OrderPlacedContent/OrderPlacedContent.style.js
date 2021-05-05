import styled from "styled-components";

export const OrderPlacedContainer = styled.div`
  width: 50vw;
  margin: 30px auto;
  padding-bottom: 10%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 900px) {
    width: 90vw;
  }
  @media (max-width: 768px) {
    width: 95vw;
  }

  header {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};

    .check__circle {
      color: #8be78b;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 560px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const OrderPlacedProductContainer = styled.div`
  display: flex;

  div {
    small {
      display: block;
    }
  }
`;
