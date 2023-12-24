import ListCards from "@/components/ListCards";
import { Sanity } from "@/lib/sanity";
import { upperFirstLetter } from "@/lib/utils";
import { simplifiedProduct } from "@/types/sanity";

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { sort } = searchParams as { [key: string]: string };
  const collection = upperFirstLetter(params.collection);
  // const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
  // const products = await getCollectionProducts({ collection: params.collection, sortKey, reverse });
  const data: simplifiedProduct[] = await Sanity.getDataByCategory(collection);

  return (
    <section>
      {data.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection...`}</p>
      ) : (
        <div className="flex flex-col gap-10 pl-10">
          <h2 className="text-4xl font-light mt-8">{collection}</h2>
          <ListCards data={data} isAction />
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
