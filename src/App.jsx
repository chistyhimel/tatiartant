import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./constants/global-styles";
import themes from "./constants/theme";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Products from "./pages/Products.page";
import Home from "./pages/Home.page";
import ProductInfo from "./pages/ProductInfo.page";
import Checkout from "./pages/Checkout.page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import SignIn from "./pages/SignIn.page";
import SignUp from "./pages/SignUp.page";
import Cart from "./pages/Cart.page";
import AboutUs from "./pages/AboutUs.page";
import ContactUs from "./pages/ContactUs.page";
import SwitchButton from "./components/SwitchButton/SwitchButton.component";

function App() {
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Router>
          <ScrollToTop>
            <SwitchButton themeState={[theme, setTheme]} />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/product-info" component={ProductInfo} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/sign-in" component={SignIn} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact-us" component={ContactUs} />
              {/* Page Not Found Here */}
              {/* <Route exact path="*" component={" "} /> */}
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
