export type StripeProduct = {
  price_data: {
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
    currency: string;
    unit_amount: number;
  };
  quantity: number;
};

export interface ProductCart {
  _id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  slug: string;
  images: any;
  imageUrl: any;
}
