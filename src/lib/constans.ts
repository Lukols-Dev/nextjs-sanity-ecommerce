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
  title: "Relevance",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];
