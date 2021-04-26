import React, { useEffect, useState } from "react";
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
import { GET_PRODUCT_CATEGORY_CALL } from "../../requests/services";

const ShopCategories = ({ shopCategoriesState }) => {
  const [shopCategoriesOpen, setShopCategoriesOpen] = shopCategoriesState;
  const [categories, setCategories] = useState([]);

  let shopCategoriesRef = useClickOutside(() => {
    setShopCategoriesOpen(false);
  });

  useEffect(() => {
    GET_PRODUCT_CATEGORY_CALL().then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <ShopCategoriesWrapper shopCategoriesOpen={shopCategoriesOpen}>
      <ShopCategoriesContainer
        onMouseLeave={() => setShopCategoriesOpen(false)}
      >
        <ShopCategoriesContent ref={shopCategoriesRef}>
          {categories.length
            ? categories.map((category) => (
                <div key={category.id}>
                  <small>{category.name}</small>
                  <br />
                  <br />
                  {category.subs
                    ? category.subs.map((item) => (
                        <p key={item.id}>{item.name}</p>
                      ))
                    : null}
                </div>
              ))
            : null}
          {/* <div>
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
          </div> */}
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
