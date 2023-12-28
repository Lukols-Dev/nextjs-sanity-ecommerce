export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  actualPrice: number;
  oldPrice: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  actualPrice: number;
  oldPrice: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

export type CartProduct = (simplifiedProduct & fullProduct) & {
  quantity: number;
};
