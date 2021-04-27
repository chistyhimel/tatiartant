import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../constants/container";
import {
  FeaturedCollectionCardContainer,
  FeaturedCollectionContainer,
} from "./FeaturedCollection.style";
import NewInStore from "../NewInStore/NewInStore.component";
import ProductCard from "../ProductCard/ProductCard.component";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { images } from "../ProductCard/data";
import { useHistory } from "react-router";
import { GET_PRODUCTS } from "../../requests/services";
const FeaturedCollection = () => {
  const [featuredCollections, setFeaturedCollections] = useState("newInStore");
  const [products, setProducts] = useState([]);
  const history = useHistory();
  const sliderRef = useRef();

  useEffect(() => {
    let data = { category_id: 2 };
    GET_PRODUCTS(data).then((res) => setProducts(res.data));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Container>
        <FeaturedCollectionContainer>
          <h4>Featured Collection</h4>
          <div className="featured__collection">
            <p>New In Store</p>
            <p>On Sale</p>
          </div>
          <FeaturedCollectionCardContainer>
            <button onClick={() => gotoPrev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="product__container">
              <Slider {...settings} ref={sliderRef}>
                {products.length
                  ? products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  : null}
              </Slider>
            </div>

            <button onClick={() => gotoNext()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </FeaturedCollectionCardContainer>
          <br />
          <span onClick={() => history.push("/products")}>
            <PrimaryButton>VIEW ALL PRODUCTS</PrimaryButton> <br />
          </span>
        </FeaturedCollectionContainer>
      </Container>
    </>
  );
};

export default FeaturedCollection;
