import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomerReviews from "./components/CustomerReviews";
import WhyChooseUs from "./components/WhyChooseUs";
import FeatureHighlights from "./components/FeatureHighlights";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomerReviews />
      <WhyChooseUs />
      <FeatureHighlights />
    </>
  );
}
