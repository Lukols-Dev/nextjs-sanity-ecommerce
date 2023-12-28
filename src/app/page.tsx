import Container from "@/components/Container";
import ListCards from "@/components/ListCards";
import HeroSection from "@/components/sections/HeroSection";
import Link from "next/link";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Sanity } from "@/lib/sanity";
import Image from "next/image";
import { endWith } from "@/lib/utils";

export default async function Home() {
  const data = await Sanity.getCategories();
  return (
    <main className="pt-6">
      <HeroSection />
      <section>
        <Container>
          <hr />
          <h2 className="text-4xl font-light mt-8">Your Style</h2>
          <div className="pt-10">
            <ListCards data={endWith(data, "Sale")} />
          </div>
        </Container>
      </section>
      <section className="py-28">
        <Container>
          <div className="w-full h-[500px] overflow-hidden relative">
            <Image
              src="/assets/exploreFashion.png"
              alt="Exlpore Fashion"
              className="object-cover object-top"
              priority
              fill
            />
          </div>
          <div className="flex flex-col mt-8 gap-4 items-start">
            <h2 className="text-4xl font-light">For Your Winter Adventures</h2>
            <p>
              Our new winter collection features durable outerwear designed to
              protect and support you on the mountain.
            </p>
            <Link href="/search" className="px-3 py-2 border-2 rounded-full">
              Find your style
            </Link>
          </div>
        </Container>
      </section>
      <NewsletterSection />
    </main>
  );
}
