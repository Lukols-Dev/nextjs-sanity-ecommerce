import { CartProduct } from "@/types/sanity";
import { create } from "zustand";

interface Store {
  items: any[];
  addItem: (item: any) => void;
  deleteItem: (_id: string) => void;
  increaseItemQuantity: (_id: string) => void;
  decreaseItemQuantity: (_id: string) => void;
  totalPrice: () => number;
}

export const useCartStore = create<Store>((set, get) => ({
  items: [],
  addItem: (item: any) => {
    set((state) => {
      const items = state.items;
      const itemIndex = items.findIndex(
        (cartItem) => cartItem._id === item._id
      );

      if (itemIndex > -1) {
        items[itemIndex].quantity = (items[itemIndex].quantity || 0) + 1;
      } else {
        item.quantity = 1;
        items.push(item);
      }

      return { items: [...items] };
    });
  },
  increaseItemQuantity: (_id: string) => {
    set((state) => {
      const items = state.items;
      const itemIndex = items.findIndex((cartItem) => cartItem._id === _id);

      if (itemIndex > -1) {
        items[itemIndex].quantity = (items[itemIndex].quantity || 0) + 1;
      }

      return { items: [...items] };
    });
  },
  decreaseItemQuantity: (_id: string) => {
    set((state) => {
      const items = state.items;
      const itemIndex = items.findIndex((cartItem) => cartItem._id === _id);

      if (
        itemIndex > -1 &&
        items[itemIndex].quantity &&
        items[itemIndex].quantity > 1
      ) {
        items[itemIndex].quantity -= 1;
      }
      return { items: [...items] };
    });
  },
  deleteItem: (_id: string) =>
    set((state) => ({ items: state.items.filter((item) => item._id !== _id) })),
  totalPrice: () =>
    get().items.reduce(
      (total, item) => total + Number(item.actualPrice) * (item.quantity || 1),
      0
    ),
}));
