import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomerReviews from "./components/CustomerReviews";
import WhyChooseUs from "./components/WhyChooseUs";
import FeatureHighlights from "./components/FeatureHighlights";
import ReadyToPrint from "./components/ReadyToPrint";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomerReviews />
      <WhyChooseUs />
      <FeatureHighlights />
      <ReadyToPrint />
    </>
  );
}
