import {
  getCartFromLocalStorage,
  saveCartToLocalStorage,
} from "@lib/cartStorage";
import { updateCartBtnIndicator } from "@lib/cartUI";

export function addToCart(product) {
  const cart = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  saveCartToLocalStorage(cart);
  updateCartBtnIndicator();
}
//! fix this!!!!
export function updateProductQuantity(productId, quantity) {
  const cart = getCartFromLocalStorage();
  const existingProductIndex = cart.findIndex((item) => item.id === productId);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity = quantity;
    saveCartToLocalStorage(cart);
  }
  updateCartBtnIndicator();
}

export function calculateTotalValue() {
  const cart = getCartFromLocalStorage();
  let totalValue = 0;
  cart.forEach((item) => {
    totalValue += item.price * item.quantity;
  });
  return totalValue.toFixed(2);
}

export function calculateTotalQuantity() {
  const cart = getCartFromLocalStorage();
  let totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
}
