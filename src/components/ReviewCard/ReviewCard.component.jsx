import React from "react";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewStarsContainer } from "../CustomerReview/CustomerReview.style";
import { ReviewCardContainer } from "./ReviewCard.style";
import pdImg from "../../assets/images/model-img-1.png";

const ReviewCard = () => {
  return (
    <>
      <ReviewCardContainer>
        <ReviewStarsContainer>
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStarSolid} />
          <FontAwesomeIcon icon={faStar} />
        </ReviewStarsContainer>
        <h4>Best Product</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ipsa!
        </p>
        <br />
        <small>
          Sameera Norani
          <br />
          17/05/2020
        </small>
        <br />
        <img src={pdImg} alt="" />
        <br />
        <p>Indigo Flower Block Print Fabric</p>
      </ReviewCardContainer>
    </>
  );
};

export default ReviewCard;
