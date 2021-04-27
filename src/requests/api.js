export const BASE_URL = `https://mudee.shop/tatiartant/api`;
export const IMG_BASE_URL = `https://mudee.shop/tatiartant/assets/images`;

export const api = {
  user: {
    signUp: `${BASE_URL}/register-otp`,
    signUpOTP: `${BASE_URL}/register`,
    signUpResendOTP: `${BASE_URL}/resend-otp`,
    signIn: `${BASE_URL}/login`,
    getInfo: `${BASE_URL}/me`,
  },
  productCategories: `${BASE_URL}/category`,
  products: `${BASE_URL}/product-cat/sub/child`,
};
