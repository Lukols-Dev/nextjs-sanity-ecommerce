import ListCards from "@/components/ListCards";
import { defaultSort, sorting } from "@/lib/constans";
import { Sanity } from "@/lib/sanity";
import { replaceScoresWithSpaces } from "@/lib/utils";
import { simplifiedProduct } from "@/types/sanity";

const SearchPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const { sort } = searchParams as { [key: string]: string };
  const { slug } = sorting.find((item) => item.slug === sort) || defaultSort;
  const data: simplifiedProduct[] = await Sanity.getProducts(
    replaceScoresWithSpaces(slug)
  );

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

export default SearchPage;
