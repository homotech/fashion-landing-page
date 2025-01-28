import React from "react";
import ImageOne from "@/../public/image-one.jpeg";
import ImageTwo from "@/../public/image-two.jpeg";
import ImageThree from "@/../public/image-three.jpeg";
import ImageFour from "@/../public/image-four.jpeg";
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
  const images = [
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className={`${libreBaskerVille.className} text-2xl mb-8`}>
        Featured Products
      </h2>
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={image.price + index} className="bg-white  flex flex-col">
            <div className="w-full rounded-lg overflow-hidden">
              <Image
                src={image.imageLink}
                className="w-full object-cover scale-[1.1]"
                alt="Image description"
                // Assuming you want to set a maximum height here for aspect ratio control
                // style={{ height: "auto", maxWidth: "100%" }}
              />
            </div>
            <div className="p-4">
              <p className={`${PoppinsFont.className} text-3xl font-bold`}>
                {image.productname}
              </p>
              <p className="mt-2">{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
