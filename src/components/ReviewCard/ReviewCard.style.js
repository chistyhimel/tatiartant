import styled from "styled-components";

export const ReviewCardContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  img {
    width: 200px;
    height: 220px;
    object-fit: scale-down;
    display: block;
    margin: 0 auto;
  }
`;
