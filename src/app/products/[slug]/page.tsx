import ImageGallery from "@/components/ImageGallery";
import AddToCardBtn from "@/components/buttons/AddToCartBtn";
import CheckoutNowBtn from "@/components/buttons/CheckoutNow";
import { Sanity } from "@/lib/sanity";
import { Page } from "@/types/page";
import { fullProduct } from "@/types/sanity";
import { TruckIcon } from "@heroicons/react/24/outline";

export const dynamic = "force-dynamic";

const ProductPage = async (props: Page) => {
  const { slug } = props.params;

  const product: fullProduct = await Sanity.getProductDetails(
    `products/${slug}`
  );

  if (!product) return <></>;

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />
          <div className="md:py-0">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {product.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.name}
              </h2>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${product.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${Number(product.price) + 30}
                </span>
              </div>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <TruckIcon className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>

            <div className="flex gap-2 w-64">
              {/* <AddToBag
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  key={data._id}
                  price_id={data.price_id}
                /> */}
              <AddToCardBtn item={product} />
              <CheckoutNowBtn />
              {/* <CheckoutNow
                  currency="USD"
                  description={data.description}
                  image={data.images[0]}
                  name={data.name}
                  price={data.price}
                  key={data._id}
                  price_id={data.price_id}
                /> */}
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
