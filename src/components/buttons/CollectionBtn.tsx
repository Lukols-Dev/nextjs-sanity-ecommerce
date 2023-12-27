"use client";

import { useCollectionModal } from "@/hooks/useCollectionModal";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const CollectionBtn = () => {
  const { onOpen } = useCollectionModal();
  return (
    <button
      className="flex md:hidden w-[150px] items-center justify-between rounded border border-black/30 px-4 py-2 text-sm cursor-pointer"
      onClick={onOpen}
    >
      Collection <ChevronRightIcon className="h-4 ml-2" />
    </button>
  );
};

export default CollectionBtn;
