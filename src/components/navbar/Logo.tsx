import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const Logo = () => {
  return (
    <Link href={"/"}>
      <ShoppingBagIcon className="text-black w-6 h-6" />
    </Link>
  );
};

export default Logo;
