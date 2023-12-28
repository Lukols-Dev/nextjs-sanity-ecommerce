import { CartProduct } from "@/types/sanity";
import { StripeProduct } from "@/types/stripe";
import Stripe from "stripe";
import { urlFor } from "./sanity";

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const stripeUrl: { success_url: string; cancel_url: string } = {
  success_url: "http://localhost:3000/",
  cancel_url: "http://localhost:3000/",
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
      unit_amount: item.price * 100,
    },
    quantity: item.quantity || 1,
  };
};
