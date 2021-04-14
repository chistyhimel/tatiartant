import styled from "styled-components";

export const CustomerReviewContainer = styled.div`
  width: 60vw;
  margin: 5% auto;
  text-align: center;
  overflow-x: hidden;
  p {
    color: ${({ theme }) => theme.colors.primary};
  }

  .slick-slide > div {
    margin: 0 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }

  @media (max-width: 768px) {
    width: 95vw;
    margin: 25px auto;
  }
`;

export const ReviewStarsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  & > * {
    margin-left: 3px;
  }
`;

export const ArrowButtonContainer = styled.div`
  width: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #eee;
  font-size: 30px;
  margin-top: 5%;
  cursor: pointer;
  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;
