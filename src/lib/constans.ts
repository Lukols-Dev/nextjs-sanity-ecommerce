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
  {
    index: "4",
    title: "Explore",
    path: "/search",
  },
];

export const collection = [
  {
    title: "All",
    path: "/search",
  },
  {
    title: "Men",
    path: "/search/men",
  },
  {
    title: "Women",
    path: "/search/women",
  },
  {
    title: "Kids",
    path: "/search/kid",
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
