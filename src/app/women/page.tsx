import Image from "next/image";

import Container from "@/components/Container";
import ListCards from "@/components/ListCards";
import { CATEGORY } from "@/lib/constans";
import { Sanity } from "@/lib/sanity";
import { simplifiedProduct } from "@/types/sanity";

const WomanPage = async () => {
  const data: simplifiedProduct[] = await Sanity.getDataByCategory(
    CATEGORY.women
  );
  const category = await Sanity.getCategoryDetails(CATEGORY.women);

  return (
    <section className="py-10">
      <Container>
        <div className="w-full h-[700px] relative overflow-hidden">
          <Image
            className="w-full h-full object-cover object-top"
            src={category[0].mainPageImageUrl}
            alt="Great Photo 1"
            priority
            fill
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

export default WomanPage;
