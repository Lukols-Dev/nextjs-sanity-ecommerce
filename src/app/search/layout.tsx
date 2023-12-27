import Container from "@/components/Container";
import FilterButton from "@/components/FilterButton";
import FilterList from "@/components/FilterList";
import CollectionBtn from "@/components/buttons/CollectionBtn";
import CollectionModal from "@/components/modal/CollectionModal";
import { collection, sorting } from "@/lib/constans";
import { Suspense } from "react";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <CollectionModal />
      <Container>
        <div className="flex">
          <div className="pt-10 flex md:max-w-[125px] md:w-full">
            <FilterList list={collection} />
          </div>
          <div className="flex flex-col order-last min-h-screen w-full md:order-none gap-6">
            <div className="flex flex-col gap-4 md:gap-0 md:justify-between md:items-end w-full md:flex-row">
              <h2 className="text-4xl font-light mt-8">Explore products</h2>
              <CollectionBtn />
              <FilterButton list={sorting} />
            </div>
            {children}
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
