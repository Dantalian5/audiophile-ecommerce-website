import { getCartFromLocalStorage, saveCartToLocalStorage } from "./cartStorage";

export function addToCart(product) {
  const cart = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  saveCartToLocalStorage(cart);
}

export function updateProductQuantity(productId, quantity) {
  const cart = getCartFromLocalStorage();
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex > -1) {
    cart[productIndex].quantity = quantity;
    saveCartToLocalStorage(cart);
  }
}

export function calculateTotalValue() {
  const cart = getCartFromLocalStorage();
  let totalValue = 0;
  cart.forEach((item) => {
    totalValue += item.price * item.quantity;
  });
  return totalValue.toFixed(2);
}
