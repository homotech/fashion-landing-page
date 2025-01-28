import { Libre_Baskerville, Poppins } from "next/font/google";

const libreBaskerVille = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const newsLetter = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`${libreBaskerVille.className}  text-3xl font-bold mb-4`}
        >
          Stay in Style
        </h2>
        <p className={`${PoppinsFont.className} mb-8`}>
          Subscribe to our newsletter for the latest trends and exclusive
          offers.
        </p>

        <form className="flex flex-row md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-64 bg-blue-100 bg-opacity-50 px-4 py-4 rounded-md flex-4 placeholder:text-white placeholder-opacity-50"
          />
          <button className="w-full py-4 bg-blue-600 rounded-md" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
export default newsLetter;
