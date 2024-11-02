import { updateModalContent } from "./cartUI";

export function openModalCart() {
  const modalCart = document.querySelector('[data-target="modal-cart"]');
  const modalWrapper = modalCart.querySelector(
    '[data-target="modal-cart-wrapper"]'
  );

  updateModalContent();
  modalCart.classList.add("active");

  modalCart.addEventListener("click", (event) =>
    handleOutsideClick(event, modalWrapper)
  );
}

export function closeModalCart() {
  const modalCart = document.querySelector('[data-target="modal-cart"]');

  modalCart.classList.remove("active");

  modalCart.removeEventListener("click", handleOutsideClick);
}

export function toggleModalCart() {
  const modalCart = document.querySelector('[data-target="modal-cart"]');

  if (modalCart.classList.contains("active")) {
    closeModalCart();
  } else {
    openModalCart();
  }
}

function handleOutsideClick(event, modalWrapper) {
  if (!modalWrapper.contains(event.target)) {
    closeModalCart();
  }
}
