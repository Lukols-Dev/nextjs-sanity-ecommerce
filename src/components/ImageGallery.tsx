"use client";

import Image from "next/image";
import { useState } from "react";

import { urlFor } from "@/lib/sanity";

interface IGalleryProps {
  images: any;
}

const ImageGallery = ({ images }: IGalleryProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      <div className="flex flex-row gap-2 overflow-y-auto w-full lg:h-[500px] lg:w-1/5 lg:flex-col">
        {images.map((image: any, idx: number) => (
          <div
            key={idx}
            className="flex-shrink-0 overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt={`photo-${idx}`}
              className="object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 h-[500px] flex-grow">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          layout="fill"
          className="object-cover object-center"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
