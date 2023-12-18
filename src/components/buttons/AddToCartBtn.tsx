"use client";

import { useCartStore } from "@/hooks/useCartStore";
import Button from "./Button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface AddToCardBtnProps {
  item: any;
  onlyIcon?: boolean;
}

const AddToCardBtn = ({ item, onlyIcon }: AddToCardBtnProps) => {
  const { addItem } = useCartStore();

  return (
    <Button
      small
      label={onlyIcon ? "" : "Add to Cart"}
      // icon={<ShoppingCartIcon className="h-4 w-4 text-white mx-auto" />}
      onClick={(e) => {
        e.preventDefault();
        addItem(item);
      }}
    />
  );
};

export default AddToCardBtn;
