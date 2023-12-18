"use client";

import { useCartModal } from "@/hooks/useCartModal";
import { useCartStore } from "@/hooks/useCartStore";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const CartButton = () => {
  const { onOpen } = useCartModal();
  const { items } = useCartStore();

  return (
    <button aria-label="Open cart" onClick={onOpen}>
      <div className="relative flex h-11 w-11 items-center justify-center text-black transition-colors border-2 rounded-md">
        <ShoppingBagIcon className="transition-all ease-in-out hover:scale-110 w-6 h-6" />
        {items.length > 0 ? (
          <div className="absolute right-2 top-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
            {items.length}
          </div>
        ) : null}
      </div>
    </button>
  );
};

export default CartButton;
