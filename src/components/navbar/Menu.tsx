// import ButtonCart from "../cart/ButtonCart";
import Link from "next/link";
import { menu } from "@/lib/constans";
import { MenuItem } from "@/types/layout";
import MobileMenu from "./MobileMenu";
import CartButton from "../cart/CartBtn";

const Menu = () => {
  return (
    <div className="relative flex items-center gap-3">
      <MobileMenu menu={menu} />
      {menu.length ? (
        <ul className="hidden gap-6 text-sm md:flex md:items-center">
          {menu.map((item: MenuItem) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="text-black underline-offset-4 hover:text-black hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <CartButton />
    </div>
  );
};

export default Menu;
