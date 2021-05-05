import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { UserContext } from "../../App";
import { IMG_BASE_URL } from "../../requests/api";
import { OrderPlacedContainer } from "./OrderPlacedContent.style";
import OrderPlacedProducts from "./OrderPlacedProducts";

function OrderPlacedContent() {
  const { user, products } = useContext(UserContext);
  const [cartProducts, setCartProducts] = products;
  return (
    <>
      <OrderPlacedContainer>
        <header>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="check__circle"
            size="4x"
          />{" "}
          <br />
          <h2>We've received your order</h2>
          <span>
            <strong>Order No : </strong>XXXXXXXXX
          </span>
          <br />
          <small>A copy of your receipt has been sent to your email.</small>
        </header>

        <br />
        <hr />
        <br />
        <main>
          <div>
            <h5>Shipping Information</h5>
            <p>
              <strong>Name : </strong> Russell
            </p>
            <p>
              <strong>Phone : </strong> 01**********
            </p>
            <p>
              <strong>Email : </strong> russell@gmail.com
            </p>
          </div>

          <div>
            <h5>Your Information</h5>
            <p>
              <strong>Address : </strong> Russell
            </p>
            <p>
              <strong>City : </strong> 01**********
            </p>
            <p>
              <strong>Postal Code : </strong> russell@gmail.com
            </p>
          </div>

          <div>
            <h5>Payment Method</h5>
            <p>
              <strong>Address : </strong> Russell
            </p>
          </div>
        </main>
        <br />
        <br />
        <section>
          <h5>Order Summery : </h5>
          <p>
            <strong>Address : </strong> Russell
          </p>

          <OrderPlacedProducts />
        </section>
      </OrderPlacedContainer>
    </>
  );
}

export default OrderPlacedContent;
