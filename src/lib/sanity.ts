import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { fullProduct, simplifiedProduct } from "@/types/sanity";
import { assertValue } from "./env";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-12-17";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const useCdn = true;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export class Sanity {
  static async getDataByCategory(
    category: string
  ): Promise<simplifiedProduct[]> {
    const query = `*[_type == "product" && category->name == "${category}"]  {
      _id,
        price,
      name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
    }`;
    const data = await client.fetch(query);
    return data;
  }

  static async getCategories() {
    const query = `*[_type == "category"] {
      _id,
      "name": name,
      "imageUrl": image.asset->url,
      "slug": slug.current
  }`;
    const data = await client.fetch(query);
    return data;
  }

  static async getProductDetails(slug: string): Promise<fullProduct> {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
        images,
        price,
        name,
        description,
        "slug": slug.current,
        "categoryName": category->name,
        price_id
    }`;
    const data = await client.fetch(query);
    return data;
  }
}
