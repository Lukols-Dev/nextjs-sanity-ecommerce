import Image from "next/image";
import Link from "next/link";
import AddToCardBtn from "./buttons/AddToCartBtn";
import CheckoutNowBtn from "./buttons/CheckoutNow";

interface ListingCardProps {
  data: any;
  isAction?: boolean;
}

const Card: React.FC<ListingCardProps> = ({ data, isAction }) => {
  return (
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
            {!!data.oldPrice && (
              <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                Sale
              </span>
            )}
          </div>
          <p className="font-semibold text-lg">{data.name}</p>
          {isAction ? (
            <>
              <div className="flex gap-2">
                <p className="font-semibold text-lg">${data.actualPrice}</p>
                {!!data.oldPrice && (
                  <p className="text-red-500 line-through text-sm">
                    ${data.oldPrice}
                  </p>
                )}
              </div>
              <AddToCardBtn item={data} />
            </>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
