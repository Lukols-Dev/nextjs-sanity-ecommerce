"use client";

import { useCartModal } from "@/hooks/useCartModal";
import CartList from "../cart/CartList";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "@/hooks/useCartStore";
import Modal from ".";
import EmptyCart from "../cart/EmptyCart";

const CartModal = () => {
  const { isOpen, onClose } = useCartModal();
  const { items, totalPrice } = useCartStore();

  const products = items;

  const headerModal = (
    <>
      <p className="text-lg font-semibold">My Cart</p>
      <button
        className="border border-gray-300 rounded-md p-2"
        aria-label="Close cart"
        onClick={onClose}
      >
        <XMarkIcon className="text-black w-6 h-6" />
      </button>
    </>
  );

  const bodyModal =
    products.length === 0 ? (
      <EmptyCart />
    ) : (
      <CartList items={products} onClose={onClose} totalPrice={totalPrice()} />
    );

  return (
    <Modal
      header={headerModal}
      body={bodyModal}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
    />
  );
};

export default CartModal;
