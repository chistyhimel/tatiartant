import { faSquare, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "../../constants/container";
import useWindowDimensions from "../../utils/windowDimentions";
import { images } from "../ProductCard/data";
import ProductCard from "../ProductCard/ProductCard.component";
import {
  LayoutCustomizeIcon,
  ProductCustomizeText,
  ProductLayoutCustomize,
  ProductsContainer,
  ProductsPageContentContainer,
} from "./ProductsPageContent.style";

const ProductsPageContent = () => {
  const [changeLayout, setChangeLayout] = useState(false);
  const { height, width } = useWindowDimensions();
  return (
    <>
      <ProductsPageContentContainer>
        <h1>Products</h1>
        <ProductLayoutCustomize>
          <div className="left__section">
            <LayoutCustomizeIcon changeLayout={changeLayout}>
              <FontAwesomeIcon
                icon={faThLarge}
                onClick={() => setChangeLayout(true)}
              />
              {width >= 768 ? (
                <FontAwesomeIcon
                  icon={faTh}
                  onClick={() => setChangeLayout(false)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSquare}
                  onClick={() => setChangeLayout(false)}
                />
              )}
            </LayoutCustomizeIcon>
          </div>
          <div className="right__section">
            <ProductCustomizeText>Sort</ProductCustomizeText>
            <ProductCustomizeText>Filter</ProductCustomizeText>
          </div>
        </ProductLayoutCustomize>

        <Container>
          <ProductsContainer changeLayout={changeLayout}>
            {images.map((img, idx) => (
              <ProductCard key={idx} img={img} idx={idx} />
            ))}
          </ProductsContainer>
        </Container>
      </ProductsPageContentContainer>
    </>
  );
};

export default ProductsPageContent;
