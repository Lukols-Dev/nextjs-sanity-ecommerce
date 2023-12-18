import Container from "@/components/Container";
import ListCards from "@/components/ListCards";
import HeroSection from "@/components/sections/HeroSection";
import Link from "next/link";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Sanity } from "@/lib/sanity";

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
            <ListCards data={data} />
          </div>
        </Container>
      </section>
      <section className="py-28">
        <Container>
          <video
            src="/assets/videos/fashion-video.mp4"
            className="w-full"
            loop
            autoPlay
            muted
          />
          <div className="flex flex-col mt-8 gap-4 items-start">
            <h2 className="text-4xl font-light">For Your Winter Adventures</h2>
            <p>
              Our new winter collection features durable outerwear designed to
              protect and support you on the mountain.
            </p>
            <Link href="/explore" className="px-3 py-2 border-2 rounded-full">
              Find your style
            </Link>
          </div>
        </Container>
      </section>
      <NewsletterSection />
    </main>
  );
}
