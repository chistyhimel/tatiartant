export const BASE_URL = `https://mudee.shop/tatiartant/api`;
export const IMG_BASE_URL = `https://mudee.shop/tatiartant/assets/images`;

export const api = {
  user: {
    signUp: `${BASE_URL}/register-otp`,
    signUpOTP: `${BASE_URL}/register`,
    signUpResendOTP: `${BASE_URL}/resend-otp`,
    signIn: `${BASE_URL}/login`,
    getInfo: `${BASE_URL}/me`,
    orderHistory: `${BASE_URL}/user/order-history`,
  },
  productCategories: `${BASE_URL}/category`,
  products: `${BASE_URL}/product-cat/sub/child`,
  allProducts: `${BASE_URL}/allProducts: all-products?page=1`,
  search: `${BASE_URL}/product/search`,
  featuredCollection: {
    newInStoreProducts: `${BASE_URL}/product/new`,
    onSaleProducts: `${BASE_URL}/product/on-sale`,
  },

  order: `${BASE_URL}/order/store`,
};
