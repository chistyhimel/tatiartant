import React, { useState } from "react";
import { Container } from "../../constants/container";
import { useTheme } from "styled-components";
import {
  NavBarContainer,
  NavBarContainerWrap,
  NavbarIconsContainer,
  NavItemsContainer,
} from "./Navbar.style";
import secondaryLogo from "../../assets/logos/logo-secondary.svg";
import primaryLogo from "../../assets/logos/logo-primary.svg";
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
  const [shopCategoriesOpen, setShopCategoriesOpen] = useState(true);
  const [cartSidebarOpen, setCartSidebarState] = useState(false);
  const [mobileMenubar, setMobileMenubar] = useState(false);
  const theme = useTheme();

  return pathname === "/checkout" ? null : (
    <>
      <NavBarContainerWrap>
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
              src={
                theme.colors.primary === "#231f20" ? secondaryLogo : primaryLogo
              }
              alt="tatiartant"
              className="nav__logo"
              onClick={() => history.push("/")}
            />

            <NavbarIconsContainer>
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

              <img
                src={personIcon}
                onClick={() => history.push("/account")}
                alt=""
              />
            </NavbarIconsContainer>

            <NavItemsContainer>
              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/")}
                >
                  Home
                </p>
              </div>

              <div>
                <p onMouseOver={() => setShopCategoriesOpen(true)}>Shop</p>
              </div>

              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/about-us")}
                >
                  About Us
                </p>
              </div>

              <div>
                <p
                  onMouseOver={() => setShopCategoriesOpen(false)}
                  onClick={() => history.push("/contact-us")}
                >
                  Contact Us
                </p>
              </div>
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
