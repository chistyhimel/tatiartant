import React, { useEffect, useRef, useState } from "react";
import {
  ProductImgContainer,
  ProductInfoContentContainer,
  ProductInfoWrap,
  ProductsDetailsContainer,
  SizeChartContainer,
} from "./ProductInfoContent.style";
import { Container } from "../../constants/container";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import TertiaryButton from "../Buttons/TertiaryButton.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import modelImg1 from "../../assets/images/model-img-1.png";
import modelImg2 from "../../assets/images/model-img-3.png";
import modelImg3 from "../../assets/images/model-img-4.png";
import modelImg4 from "../../assets/images/model-img-5.png";
import useWindowDimensions from "../../utils/windowDimentions";

const ProductInfoContent = () => {
  // const [images, setImages] = useState(null);
  const { height, width } = useWindowDimensions();
  const [images, setImages] = useState([
    {
      original: modelImg1,
      thumbnail: modelImg1,
    },
    {
      original: modelImg2,
      thumbnail: modelImg2,
    },
    {
      original: modelImg3,
      thumbnail: modelImg3,
    },
    {
      original: modelImg4,
      thumbnail: modelImg4,
    },
    {
      original: modelImg1,
      thumbnail: modelImg1,
    },
    {
      original: modelImg3,
      thumbnail: modelImg3,
    },
    {
      original: modelImg4,
      thumbnail: modelImg4,
    },
    {
      original: modelImg2,
      thumbnail: modelImg2,
    },
  ]);

  // useEffect(() => {
  //   let shouldCancel = false;

  //   const call = async () => {
  //     const response = await axios.get(
  //       "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
  //     );
  //     if (!shouldCancel && response.data && response.data.length > 0) {
  //       setImages(
  //         response.data.map((url) => ({
  //           original: `${url}`,
  //           thumbnail: `${url}`,
  //         }))
  //       );
  //     }
  //   };
  //   call();
  //   return () => (shouldCancel = true);
  // }, []);

  console.log(images);

  return (
    <>
      <ProductInfoWrap>
        <Container>
          <ProductInfoContentContainer>
            <ProductImgContainer>
              {images ? (
                <ImageGallery
                  thumbnailPosition={width >= 768 ? "left" : "bottom"}
                  items={images}
                  showPlayButton={false}
                />
              ) : null}
            </ProductImgContainer>

            <ProductsDetailsContainer>
              <h1>Bagru Kota Doria Silk Hand Block Printed Saree</h1>
              <small>SKU: SRBGKOTA042</small>
              <br />
              <p>Bdt. 4250</p>
              <br />
              <SizeChartContainer>
                <h2>
                  <span>Size</span>
                  <span>
                    <u>Size Chart</u>
                  </span>
                </h2>
                <div>
                  <span className="size__box">XS</span>
                  <span className="size__box">S</span>
                  <span className="size__box">M</span>
                  <span className="size__box">L</span>
                  <span className="size__box">XL</span>
                  <span className="size__box">XXL</span>
                  <span className="size__box">3XL</span>
                  <span className="size__box">4XL</span>
                </div>
              </SizeChartContainer>
              <br />
              <br />
              <TertiaryButton>Add to cart . Bdt. 4250</TertiaryButton>
              <br />
              <PrimaryButton outlined={true}>Buy it now</PrimaryButton>
              <br />

              {/* ----------------------Product Spacifications Section ----------------------*/}
              <br />
              <br />
              <h2>Product Spacifications</h2>
              <br />
              <ul>
                <li>
                  Saree Length: 5.5 meters saree, 0.9 meters blouse piece |
                  Width: 45 inches
                </li>
                <li>Fabric: Kota Doria Cotton</li>
                <li>Craft: Bagru</li>
                <li>Wash Care: Dry Clean only.</li>
              </ul>
              <br />

              {/* ----------------------Shipping Section ----------------------*/}

              <br />
              <h6>
                <u>Shipping</u>
              </h6>
              <br />
              <p>Shipped within 2-4 working days</p>
              <br />

              {/* ----------------------Returns & Exchanges Section ----------------------*/}

              <br />
              <h6>
                <u>Returns & Exchanges</u>
              </h6>
              <br />
              <p>
                This item is eligible for return. Store credit will be provided
                against the value of returned item. Refunds are only provided in
                case the product is damaged/defective. Please note that
                colour/motif/print irregularities do not amount to damage/defect
                in the product as minor irregularities like these are an
                inherent part of handcrafted products.{" "}
              </p>
              <br />

              {/* ----------------------More Info Section ----------------------*/}

              <br />
              <h6>
                <u>More Info</u>
              </h6>
              <br />
              <p>
                The print might have slight irregularities in the motif &
                colours which results from the human involvement in the process
                & is a hallmark of handcrafted products.
                <br />
                <br />
                Since the fabric is dyed using natural, vegetable dyes, it may
                rub dry or bleed colour on coming in contact with water for the
                first time.
              </p>
              <br />
              <small>
                Share &nbsp; &nbsp; &nbsp;
                <FontAwesomeIcon icon={faFacebookF} />
                &nbsp; &nbsp;
                <FontAwesomeIcon icon={faTwitter} />
                &nbsp; &nbsp;
                <FontAwesomeIcon icon={faPinterest} />
                &nbsp; &nbsp;
              </small>
            </ProductsDetailsContainer>
          </ProductInfoContentContainer>
        </Container>
      </ProductInfoWrap>
    </>
  );
};

export default ProductInfoContent;
