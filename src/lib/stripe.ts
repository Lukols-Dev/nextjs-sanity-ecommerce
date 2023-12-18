import { fullProduct } from "@/types/sanity";
import { StripeProduct } from "@/types/stripe";
import Stripe from "stripe";

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const stripeUrl: { success_url: string; cancel_url: string } = {
  success_url: "http://localhost:3000/checkout/success",
  cancel_url: "http://localhost:3000/checkout/cancel",
};

export const stripeProduct = (item: fullProduct): StripeProduct => {
  return {
    price_data: {
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.images],
      },
      currency: "usd",
      unit_amount: item.price * 100,
    },
    quantity: 1,
  };
};
