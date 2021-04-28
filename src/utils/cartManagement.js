export const handleAddToCart = (cartProducts, setCartProducts, product) => {
  product.price = parseInt(product.price);
  product.total_price = product.price;
  product.quantity = 1;
  product.total_quantity = product.quantity;
  product.size = "";
  product.color = "";
  let newProduct = [...cartProducts, product];
  setCartProducts(newProduct);
};

export const handleQuantity = (
  cartProducts,
  setCartProducts,
  pd,
  quantityState
) => {
  if (cartProducts.length) {
    const product = cartProducts.find((p) => p.id === pd.id);
    let productIndex = cartProducts.findIndex((obj) => obj.id === product.id);
    if (product) {
      if (quantityState === "increment") {
        product.total_quantity = product.total_quantity + 1;
      } else if (quantityState === "decrement") {
        if (product.total_quantity > 1) {
          product.total_quantity = product.total_quantity - 1;
        } else {
          handleRemoveItemFromCart(cartProducts, setCartProducts, pd.id);
          return;
        }
      }
      product.total_price = product.price * product.total_quantity;
      let updatedProducts = [...cartProducts];
      updatedProducts[productIndex] = product;
      setCartProducts(updatedProducts);
    }
  } else if (quantityState === "increment") {
    handleAddToCart(cartProducts, setCartProducts, pd);
  }
};

export const findProductOnCart = (cartProducts = [], productId = 0) => {
  if (cartProducts.length) {
    const product = cartProducts.find((p) => p.id === productId);
    if (product) {
      return true;
    } else {
      return false;
    }
  }
};

export const handleRemoveItemFromCart = (
  cartProducts,
  setCartProducts,
  productId
) => {
  const remainingProduct = cartProducts.filter((item) => item.id !== productId);
  setCartProducts(remainingProduct);
};
