import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomerReviews from "./components/CustomerReviews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomerReviews />
    </>
  );
}
