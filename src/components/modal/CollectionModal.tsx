"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Modal from ".";
import { collection } from "@/lib/constans";
import { FilterItemList } from "../FilterList";
import { useCollectionModal } from "@/hooks/useCollectionModal";
import clsx from "clsx";

const CollectionModal = () => {
  const { isOpen, onClose } = useCollectionModal();

  const headerModal = (
    <button
      className="border border-gray-300 rounded-md p-2"
      aria-label="Close cart"
      onClick={onClose}
    >
      <ChevronRightIcon
        className={clsx(
          "text-black w-6 h-6 transition-all ease-in-out duration-300",
          { "rotate-180": isOpen }
        )}
      />
    </button>
  );

  const bodyModal =
    collection.length === 0 ? (
      <></>
    ) : (
      <div className="flex flex-col items-center">
        <FilterItemList list={collection} />
      </div>
    );

  return (
    <Modal
      header={headerModal}
      body={bodyModal}
      isOpen={isOpen}
      onClose={onClose}
      position="left"
    />
  );
};

export default CollectionModal;
