import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";
import FeaturedProducts from "@/components/featuredProducts";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function FashionLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* NewsLetter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
