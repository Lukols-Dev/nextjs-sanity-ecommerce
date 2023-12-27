import { create } from "zustand";

interface CollectiojModnlStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCollectionModal = create<CollectiojModnlStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
