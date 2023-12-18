import { paymentMethods } from "@/lib/constans";
import { stripe, stripeProduct, stripeUrl } from "@/lib/stripe";
import { CartProduct } from "@/types/sanity";
import { ProductCart } from "@/types/stripe";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const body = await request.json();
  const { items }: { items: any[] } = body;

  if (!items || items.length === 0) {
    return NextResponse.json("No products in cart", { status: 400 });
  }

  try {
    const line_items = await items.map((item: CartProduct) =>
      stripeProduct(item)
    );

    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: stripeUrl.success_url,
      cancel_url: stripeUrl.cancel_url,
      payment_method_types: ["card", "paypal"],
      mode: "payment",
      billing_address_collection: "auto",
      line_items: line_items,
    });

    return NextResponse.json(checkoutSession.url, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 400 });
  }
};
