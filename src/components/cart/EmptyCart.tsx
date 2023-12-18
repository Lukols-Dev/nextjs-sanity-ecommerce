import { FC } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const EmptyCart: FC = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
      <ShoppingBagIcon />
      <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
    </div>
  );
};

export default EmptyCart;
