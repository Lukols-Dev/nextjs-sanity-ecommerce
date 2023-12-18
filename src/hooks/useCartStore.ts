import { create } from "zustand";

interface Store {
  items: any[];
  addItem: (item: any) => void;
  deleteItem: (_id: string) => void;
  totalPrice: () => number;
}

export const useCartStore = create<Store>((set, get) => ({
  items: [],
  addItem: (item: any) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (_id: string) =>
    set((state) => ({ items: state.items.filter((item) => item._id !== _id) })),
  totalPrice: () =>
    get().items.reduce((total, item) => total + Number(item.price), 0),
}));
