import styled from "styled-components";
import devices from "../../constants/devices";

export const ProductCardConatiner = styled.div`
  height: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const CardImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  img:last-child {
    position: absolute;
    opacity: 0;
  }
  &:hover img:last-child {
    position: static;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
  &:hover img:first-child {
    position: absolute;
    opacity: 0;
  }
`;

export const CardText = styled.div`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  margin-bottom: 5px;

  @media (max-width: 1300px) {
    font-size: 12px;
  }
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;
