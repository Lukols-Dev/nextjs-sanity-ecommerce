import { FC, Fragment } from "react";
import Card from "./Card";
import { simplifiedProduct } from "@/types/sanity";

interface ListCardsProps {
  data: any[];
  route?: string;
}

const ListCards: FC<ListCardsProps> = async ({ data, route }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map((product: simplifiedProduct) => (
        <Fragment key={product._id}>
          <Card data={product} />
        </Fragment>
      ))}
    </div>
  );
};

export default ListCards;
