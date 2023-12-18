"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Button from "./Button";

interface AddToCardBtnProps {
  item?: any;
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
