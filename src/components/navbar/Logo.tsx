import Link from "next/link";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-2 font-semibold">
      <BuildingStorefrontIcon className="text-black w-6 h-6" />
      Sanity Shop
    </Link>
  );
};

export default Logo;
