"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import { CartProduct, fullProduct } from "@/types/sanity";

interface ICheckoutNowBtnProps {
  items?: CartProduct[] | fullProduct[];
}

const CheckoutNowBtn = ({ items }: ICheckoutNowBtnProps) => {
  const router = useRouter();

  const checkout = async () => {
    if (!items || items.length === 0) return;
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          Content_Type: "applications/json",
        },
        body: JSON.stringify({ items: items }),
      });

      const data = await res.json();
      router.push(data);
    } catch (err) {
      console.log(err);
    }
  };

  return <Button small label={`Checkout Now`} onClick={checkout} />;
};

export default CheckoutNowBtn;
