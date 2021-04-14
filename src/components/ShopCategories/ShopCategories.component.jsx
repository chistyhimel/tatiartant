import React from "react";
import { Container } from "../../constants/container";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  ShopCategoriesContainer,
  ShopCategoriesContent,
  ShopCategoriesWrapper,
} from "./ShopCategories.style";

const ShopCategories = ({ shopCategoriesState }) => {
  const [shopCategoriesOpen, setShopCategoriesOpen] = shopCategoriesState;

  let shopCategoriesRef = useClickOutside(() => {
    setShopCategoriesOpen(false);
  });

  return (
    <ShopCategoriesWrapper shopCategoriesOpen={shopCategoriesOpen}>
      <ShopCategoriesContainer
        onMouseLeave={() => setShopCategoriesOpen(false)}
      >
        <Container>
          <ShopCategoriesContent ref={shopCategoriesRef}>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
            <div>
              <small>Fabrics by the meter</small>
              <br />
              <br />
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
              <p>All Fabrics</p>
            </div>
          </ShopCategoriesContent>
        </Container>
      </ShopCategoriesContainer>
    </ShopCategoriesWrapper>
  );
};

export default ShopCategories;
