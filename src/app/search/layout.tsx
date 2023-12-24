import Container from "@/components/Container";
import FilterList from "@/components/FilterList";
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
          <div className="order-last min-h-screen w-full md:order-none">
            {children}
          </div>
          {/* <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div> */}
        </div>
      </Container>
    </Suspense>
  );
}

const collection = [
  {
    title: "Men",
    path: "search/men",
  },
  {
    title: "Women",
    path: "search/women",
  },
  {
    title: "Kids",
    path: "search/kid",
  },
];
