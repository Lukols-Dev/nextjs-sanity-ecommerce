import ListCards from "@/components/ListCards";
import { defaultSort, sorting } from "@/lib/constans";
import { Sanity } from "@/lib/sanity";
import { replaceScoresWithSpaces, upperFirstLetter } from "@/lib/utils";
import { simplifiedProduct } from "@/types/sanity";

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { sort } = searchParams as { [key: string]: string };
  const { slug } = sorting.find((item) => item.slug === sort) || defaultSort;
  const collection = upperFirstLetter(params.collection);
  let data: simplifiedProduct[];

  if (collection !== "Sale") {
    data = await Sanity.getDataByCategory(
      collection,
      replaceScoresWithSpaces(slug)
    );
  } else {
    data = await Sanity.getSaleProducts();
  }

  return (
    <section>
      {data.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection...`}</p>
      ) : (
        <div className="flex flex-col gap-10">
          <ListCards data={data} isAction />
        </div>
      )}
    </section>
  );
};

export default CategoryPage;
