import Image from "next/image";
import Link from "next/link";
import AddToCardBtn from "./buttons/AddToCartBtn";
import CheckoutNowBtn from "./buttons/CheckoutNow";
import { Fragment } from "react";

interface ListingCardProps {
  data: any;
}

const Card: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <Fragment key={data._id}>
      <div className="col-span-1 cursor-pointer group">
        <Link href={`/${data.slug}`}>
          <div className="flex flex-col gap-2 w-full h-[500px] justify-between">
            <div className="aspect-square h-full  w-full relative overflow-hidden">
              <Image
                fill
                className="object-cover h-full w-full group-hover:scale-110 transition"
                src={data.imageUrl}
                alt="Listing"
              />
            </div>
            <p className="font-semibold text-lg">{data.name}</p>
            <p className="font-semibold text-lg">${data.price}</p>
            <CheckoutNowBtn />
            <AddToCardBtn item={data} />
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Card;
