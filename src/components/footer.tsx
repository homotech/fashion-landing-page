import Link from "next/link";
import { Poppins } from "next/font/google";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className={`${PoppinsFont.className} bg-gray-100 py-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Women
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Men
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Affiliates
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <ul>
                <li>
                  <Link
                    href="https://www.instagram.com/nartthedesigner/"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; 2025 Boma Dokubo Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
