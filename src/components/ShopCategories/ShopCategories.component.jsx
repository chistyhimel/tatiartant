import React from "react";
import { Container } from "../../constants/container";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import {
  ShopCategoriesContainer,
  ShopCategoriesContent,
  ShopCategoriesWrapper,
  ShopCatImgContainer,
} from "./ShopCategories.style";
import img1 from "../../assets/images/shop-category-imgs/shop-cat-img-2.jpg";
import img2 from "../../assets/images/shop-category-imgs/shop-cat-img-1.jpg";
import img3 from "../../assets/images/shop-category-imgs/shop-cat-img-3.jpg";
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
        <ShopCategoriesContent ref={shopCategoriesRef}>
          <div>
            <small>Sharees</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Blouses</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Kurtas</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
          <div>
            <small>Three Pieces</small>
            <br />
            <br />
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
            <p>All Fabrics</p>
          </div>
        </ShopCategoriesContent>

        <ShopCatImgContainer>
          <img src={img1} alt="" />
          <div>
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </ShopCatImgContainer>
      </ShopCategoriesContainer>
    </ShopCategoriesWrapper>
  );
};

export default ShopCategories;
