import ListCards from "@/components/ListCards";
import { Sanity } from "@/lib/sanity";
import { simplifiedProduct } from "@/types/sanity";

const SearchPage = async () => {
  const data: simplifiedProduct[] = await Sanity.getProducts();

  return (
    <section>
      {data.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection...`}</p>
      ) : (
        <div className="flex flex-col gap-10 pl-10">
          <h2 className="text-4xl font-light mt-8">All Products</h2>
          <ListCards data={data} isAction />
        </div>
      )}
    </section>
  );
};

export default SearchPage;
