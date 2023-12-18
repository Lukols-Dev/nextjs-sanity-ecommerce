import Container from "@/components/Container";
import ListCards from "@/components/ListCards";
import { CATEGORY } from "@/lib/constans";
import { Sanity } from "@/lib/sanity";
import { simplifiedProduct } from "@/types/sanity";
import Image from "next/image";

const ManPage = async () => {
  const data: simplifiedProduct[] = await Sanity.getDataByCategory(
    CATEGORY.men
  );

  return (
    <section className="py-10">
      <Container>
        <div className="w-full h-[500px] overflow-hidden">
          <Image
            src="/assets/manHeroCategory.png"
            alt="Great Photo 1"
            className="h-full w-full object-cover"
            priority
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-20">
          <div>
            <h2 className="text-4xl font-light mt-8">Winter Style</h2>
            <div className="pt-10">
              <ListCards data={data} isAction />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManPage;
