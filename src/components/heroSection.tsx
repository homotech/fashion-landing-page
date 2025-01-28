import Image from "next/image";
import HeroImage from "@/../public/hero-image.jpeg";
import { Poppins, Libre_Baskerville } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["200", "400"],
});

const libreBaskerVille = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeroSection = () => {
  return (
    <section className=" md:pt-32 pb-4 md:pb-24">
      <div className="container mx-auto w-full overflow-hidden h-[600px] flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 flex flex-col justify-end pb-24 md:mb-0 relative z-10 flex-col h-full bg-black bg-opacity-50 p-8 md:p-16 text-white">
          <h1
            className={`${libreBaskerVille.className} text-center  text-4xl md:text-6xl font-bold text-white-900 mb-4`}
            style={{ fontWeight: "light" }}
          >
            Discover Your Style
          </h1>
          <p
            className={`${PoppinsFont.className} text-center text-xl text-white-600 mb-6`}
          >
            Explore the latest trends and express yourself through fashion.
          </p>
          <div className="flex justify-center">
            <button
              className={`item-center w-2/3 text-lg text-black bg-white px-4 py-2 ${PoppinsFont.className} `}
            >
              Shop Collection
            </button>
          </div>
        </div>
        <div className="absolute md:w-1/2">
          <Image
            src={HeroImage}
            alt="Fashion model"
            // width={600}
            // height={600}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
