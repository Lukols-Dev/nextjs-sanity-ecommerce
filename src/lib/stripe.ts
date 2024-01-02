import { CartProduct } from "@/types/sanity";
import { StripeProduct } from "@/types/stripe";
import Stripe from "stripe";
import { urlFor } from "./sanity";

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const stripeUrl: { success_url: string; cancel_url: string } = {
  success_url:
    process.env.APP_MODE === "development"
      ? "http://localhost:3000/"
      : process.env.HOME_URL!,
  cancel_url:
    process.env.APP_MODE === "development"
      ? "http://localhost:3000/"
      : process.env.HOME_URL!,
};

export const stripeProduct = (item: CartProduct): StripeProduct => {
  const image: string = item.imageUrl || urlFor(item.images[0]).url();

  return {
    price_data: {
      product_data: {
        name: item.name,
        description: item.description || `Product: ${item.name}`,
        images: [image],
      },
      currency: "usd",
      unit_amount: item.actualPrice * 100,
    },
    quantity: item.quantity || 1,
  };
};
