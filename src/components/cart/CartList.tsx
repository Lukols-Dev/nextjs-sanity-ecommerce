"use client";

import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useCartStore } from "@/hooks/useCartStore";
import { CartProduct } from "@/types/sanity";
import { urlFor } from "@/lib/sanity";
import CheckoutNowBtn from "../buttons/CheckoutNow";

interface CartListProps {
  items: CartProduct[];
  totalPrice: number;
  onClose: () => void;
}

const CartList: FC<CartListProps> = ({ items, totalPrice, onClose }) => {
  const { deleteItem } = useCartStore();

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden p-1">
      <ul className="flex-grow overflow-auto py-4">
        {items.map((item: CartProduct) => (
          <li
            key={item._id}
            className="flex w-full flex-col border-b border-neutral-300"
          >
            <div className="relative flex w-full flex-row justify-between px-1 py-4">
              <div className="absolute z-40 -mt-2 ml-[50px]">
                <button
                  className="flex items-center justify-center bg-gray-400 hover:bg-gray-300 rounded-md p-1"
                  onClick={() => deleteItem(item._id)}
                >
                  <TrashIcon className="text-white w-4 h-4" />
                </button>
              </div>
              <Link
                href={`/${item.slug}`}
                onClick={onClose}
                className="z-30 flex flex-row space-x-4"
              >
                <div className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                  <Image
                    className="h-full w-full object-cover object-center"
                    width={64}
                    height={64}
                    alt={item.name}
                    src={urlFor(item.imageUrl || item.images[0]).url()}
                  />
                </div>

                <div className="flex flex-1 flex-col text-base">
                  <span className="leading-tight">{item.name}</span>
                </div>
              </Link>
              <p className="flex items-center justify-between text-xl">
                $ {item.price}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="py-4 text-sm text-neutral-500">
        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1">
          <p>Total</p>
          <p className="flex items-center justify-between text-right text-base text-black">
            $ {totalPrice}
          </p>
        </div>
      </div>
      <CheckoutNowBtn items={items} />
    </div>
  );
};

export default CartList;
