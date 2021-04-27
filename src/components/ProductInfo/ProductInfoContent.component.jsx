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
import { GET_PRODUCTS } from "../../requests/services";
import { useParams } from "react-router";
import { IMG_BASE_URL } from "../../requests/api";
import Loading from "../Lodading/Loading.component";

const ProductInfoContent = () => {
  // const [images, setImages] = useState(null);
  const { height, width } = useWindowDimensions();
  const [porductInfo, setProductInfo] = useState({});
  const { productId } = useParams();
  let {
    name,
    photo,
    policy,
    price,
    size,
    galleries,
    colors,
    details,
  } = porductInfo;
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let data = { product_id: productId };
    GET_PRODUCTS(data).then((res) => {
      let response = res.data[0];
      setProductInfo(response);

      if (response && response.galleries.length) {
        setImages(
          response.galleries.map((url) => ({
            original: `${IMG_BASE_URL}/galleries/${url.photo}`,
            thumbnail: `${IMG_BASE_URL}/galleries/${url.photo}`,
          }))
        );
        setLoader(false);
      } else {
        setImages([
          {
            original: `${IMG_BASE_URL}/products/${response.photo}`,
            thumbnail: `${IMG_BASE_URL}/products/${response.photo}`,
          },
        ]);
        setLoader(false);
      }
    });
  }, [productId]);

  return !loader ? (
    <>
      <ProductInfoWrap>
        <Container>
          <ProductInfoContentContainer>
            <ProductImgContainer>
              {images.length ? (
                <ImageGallery
                  thumbnailPosition={width >= 768 ? "left" : "bottom"}
                  items={images}
                  showPlayButton={false}
                />
              ) : null}
            </ProductImgContainer>

            <ProductsDetailsContainer>
              <h1>{name}</h1>
              <small>SKU: SRBGKOTA042</small>
              <br />
              <p>Bdt. {price}</p>
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
              {/* ----------Button Group -------------*/}
              <span>
                <TertiaryButton>Add to cart . Bdt. {price}</TertiaryButton>
              </span>
              <br />
              <span>
                <PrimaryButton outlined={true}>Buy it now</PrimaryButton>
              </span>
              <br />

              {/* ----------------------Product Spacifications Section ----------------------*/}
              <br />
              <br />
              <h2>Product Spacifications</h2>
              <br />

              <div dangerouslySetInnerHTML={{ __html: details }}></div>
              {/* <ul>
                <li>
                  Saree Length: 5.5 meters saree, 0.9 meters blouse piece |
                  Width: 45 inches
                </li>
                <li>Fabric: Kota Doria Cotton</li>
                <li>Craft: Bagru</li>
                <li>Wash Care: Dry Clean only.</li>
              </ul> */}
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
  ) : (
    <Loading />
  );
};

export default ProductInfoContent;
