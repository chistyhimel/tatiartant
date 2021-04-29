import { faSquare, faTh, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container } from "../../constants/container";
import { GET_PRODUCTS } from "../../requests/services";
import useWindowDimensions from "../../utils/windowDimentions";
import Loading from "../Lodading/Loading.component";
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
  const { categoryName, categoryType, categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if ((categoryName, categoryId)) {
      let data = { [categoryType]: categoryId };
      GET_PRODUCTS(data).then((res) => {
        setProducts(res.data);
        setLoader(false);
      });
    }
    return () => {
      setLoader(true);
      setProducts([]);
    };
  }, [categoryName, categoryType, categoryId]);

  console.log(products);

  return loader ? (
    <Loading />
  ) : (
    <ProductsPageContentContainer>
      <h1>{categoryName}</h1>
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
          {products.length
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </ProductsContainer>
      </Container>
    </ProductsPageContentContainer>
  );
};

export default ProductsPageContent;
