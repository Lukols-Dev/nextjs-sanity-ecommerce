import { SortFilterItem } from "./sanity";

export const menu = [
  {
    index: "1",
    title: "Men",
    path: "/men",
  },
  {
    index: "2",
    title: "Women",
    path: "/women",
  },
  {
    index: "3",
    title: "Kids",
    path: "/kid",
  },
];

export const CATEGORY = {
  men: "Men",
  women: "Women",
  kid: "Kids",
  sale: "Sale",
};

export const paymentMethods = ["card", "paypal"];

export const defaultSort: SortFilterItem = {
  title: "New Products",
  slug: "createdAt-asc",
  default: true,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Price: Low to high",
    slug: "price-asc",
  },
  {
    title: "Price: High to low",
    slug: "price-desc",
  },
];
