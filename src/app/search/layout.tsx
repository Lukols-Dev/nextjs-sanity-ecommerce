import Container from "@/components/Container";
import FilterButton from "@/components/FilterButton";
import FilterList from "@/components/FilterList";
import { sorting } from "@/lib/constans";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <Container>
        <div className="flex">
          <div className="w-full pt-10 flex md:max-w-[125px]">
            <FilterList list={collection} />
          </div>
          <div className="flex flex-col order-last min-h-screen w-full md:order-none gap-6">
            <div className="flex justify-between items-end w-full">
              <h2 className="text-4xl font-light mt-8">All Products</h2>
              <FilterButton list={sorting} />
            </div>
            {children}
          </div>
        </div>
      </Container>
    </Suspense>
  );
}

const collection = [
  {
    title: "All",
    path: "/search",
  },
  {
    title: "Men",
    path: "/search/men",
  },
  {
    title: "Women",
    path: "/search/women",
  },
  {
    title: "Kids",
    path: "/search/kid",
  },
];
