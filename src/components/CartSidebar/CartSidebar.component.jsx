import React from "react";
import {
  CartSidebarContainer,
  CartSidebarTopSection,
  CartSidebarBottomSection,
  CartProductWrap,
  CartSidebarWrapper,
} from "./CartSidebar.style";
import { useClickOutside } from "../../utils/OutsideClickDetact";
import CartProduct from "../CartProduct/CartProduct.component";
import PrimaryButton from "../Buttons/PrimaryButton.component";
import { useHistory } from "react-router";

const CartSidebar = ({ sidebarState }) => {
  const [cartSidebarOpen, setCartSidebarState] = sidebarState;
  const history = useHistory();
  let cartSidebarRef = useClickOutside(() => {
    setCartSidebarState(false);
  });

  return (
    <CartSidebarWrapper cartSidebarOpen={cartSidebarOpen}>
      <CartSidebarContainer
        ref={cartSidebarRef}
        cartSidebarOpen={cartSidebarOpen}
      >
        <CartSidebarTopSection>
          <h1>
            <span>Cart</span>{" "}
            <span onClick={() => setCartSidebarState(false)}>✕</span>
          </h1>

          <div className="offer__text">
            <small>
              Spend Bdt. 1 more and get free shipping within Bangladesh!
            </small>
          </div>
          <CartProductWrap>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </CartProductWrap>
        </CartSidebarTopSection>

        <CartSidebarBottomSection>
          <p>Recieve order notification via WhatsApp:</p>
          <div className="whatsapp_contact">
            <p>WhatsApp Number:</p>
            <input type="text" />
          </div>
          <p>Add Order Note</p>

          <p>Shipping & taxes calculated at checkout</p>

          <span
            onClick={() => {
              setCartSidebarState(false);
              history.push("/cart");
            }}
          >
            <PrimaryButton>View cart . Bdt. 1255</PrimaryButton>
          </span>
        </CartSidebarBottomSection>
      </CartSidebarContainer>
    </CartSidebarWrapper>
  );
};

export default CartSidebar;
