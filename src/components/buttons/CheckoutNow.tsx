"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { Product } from "@/types/cart";
import Button from "./Button";

interface AddToCardBtnProps {
  item?: Product;
}

const CheckoutNowBtn = ({ item }: AddToCardBtnProps) => {
  const { addItem } = useCartStore();

  return (
    <Button
      small
      label={`Checkout Now`}
      onClick={(e) => {
        e.preventDefault();
        // addItem(item);
      }}
    />
  );
};

export default CheckoutNowBtn;
