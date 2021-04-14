import React, { useState } from "react";
import { Container } from "../../constants/container";
import {
  NavBarContainer,
  NavBarContainerWrap,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import logo from "../../assets/images/logo.svg";
import SearchBar from "../SearchBar/SearchBar.component";
import ShopCategories from "../ShopCategories/ShopCategories.component";
import CartSidebar from "../CartSidebar/CartSidebar.component";
import { useHistory, useLocation } from "react-router";
import searchIcon from "../../assets/icons/search.svg";
import personIcon from "../../assets/icons/person.svg";
import shoppingIcon from "../../assets/icons/shopping.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menubar from "../Menubar/Menubar.component";

const Navbar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(false);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  const [mobileMenubar, setMobileMenubar] = useState(false);

  return pathname === "/checkout" ? null : (
    <>
      <NavBarContainerWrap>
        {/* <TopBar>
          <p>
            We ship Worldwide | COD Available | Use code FIRSTBUY to get Tk 250
            off on your 1st order above Tk 2500
          </p>
        </TopBar> */}
        <Container>
          <NavBarContainer>
            {/*---------- Mobile Hamburger Menu---------- */}

            <FontAwesomeIcon
              className="hamburger__icon"
              icon={faBars}
              size="2x"
              onClick={() => setMobileMenubar(true)}
            />

            {/*---------- Mobile Hamburger Menu---------- */}
            <img
              src={logo}
              alt=""
              className="nav__logo"
              onClick={() => history.push("/")}
            />

            <NavbarIconsContainer>
              <img
                src={personIcon}
                onClick={() => history.push("/sign-in")}
                alt=""
              />
              <img
                src={searchIcon}
                alt=""
                onClick={() => setSearchBarOpen(true)}
              />
              <img
                src={shoppingIcon}
                alt=""
                onClick={() => setCartSidebarState(true)}
              />
            </NavbarIconsContainer>

            <NavItemsContainer>
              <p
                onMouseOver={() => setShopCategoriesOpen(false)}
                onClick={() => history.push("/")}
              >
                Home
              </p>
              <p onMouseOver={() => setShopCategoriesOpen(true)}>Shop</p>
              <p
                onMouseOver={() => setShopCategoriesOpen(false)}
                onClick={() => history.push("/about-us")}
              >
                About Us
              </p>
              <p
                onMouseOver={() => setShopCategoriesOpen(false)}
                onClick={() => history.push("/contact-us")}
              >
                Contact Us
              </p>
            </NavItemsContainer>
          </NavBarContainer>
        </Container>
      </NavBarContainerWrap>

      {/* ====================={Search Bar, Sidebar}========================= */}

      <SearchBar searchBarState={[searchBarOpen, setSearchBarOpen]} />
      <ShopCategories
        shopCategoriesState={[shopCategoriesOpen, setShopCategoriesOpen]}
      />
      <CartSidebar sidebarState={[cartSidebarOpen, setCartSidebarState]} />
      {/* ====================={Search Bar, Sidebar}========================= */}
      <Menubar mobileMenubarState={[mobileMenubar, setMobileMenubar]} />
    </>
  );
};

export default Navbar;
