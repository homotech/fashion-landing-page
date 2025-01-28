"use client";
import React from "react";
import ImageOne from "@/../public/image-one.jpeg";
import ImageTwo from "@/../public/image-two.jpeg";
import ImageThree from "@/../public/image-three.jpeg";
import ImageFour from "@/../public/image-four.jpeg";
import { useState } from "react";
import Image from "next/image";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libreBaskerVille = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["200", "400"],
});

const FeaturedProducts = () => {
  const [images, setImages] = useState([
    {
      productname: "Product name",
      price: "$99.99",
      imageLink: ImageOne,
    },
    {
      productname: "Product name",
      price: "$49.99",
      imageLink: ImageTwo,
    },
    {
      productname: "Product name",
      price: "$39.99",
      imageLink: ImageThree,
    },
    {
      productname: "Product name",
      price: "$29.99",
      imageLink: ImageFour,
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className={`${libreBaskerVille.className} text-2xl mb-8 `}>
        Featured Products
      </h2>
      <div>
        {images.map((image, index) => (
          <div className="w-full bg-white mb-4 " key={image.price + index}>
            <Image
              src={image.imageLink}
              className="w-full rounded-lg mb-4 border-2 border-gray-200 object-cover"
              alt="Image description"
            />
            <p
              className={`${PoppinsFont.className} text-3xl`}
              //   style={{ fontWeight: "bold" }}
            >
              {image.productname}
            </p>
            <p>{image.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
