import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="min-h-screen w-full md:py-20 md:px-10 py-5 px-4">
      <div className="flex justify-around items-center">
        <Image
          src={"assets/star.svg"}
          height={50}
          width={50}
          alt="bg image"
          className="hidden md:block"
        />
        <div className="text-center">
          <h3 className="text-xl uppercase font-semibold">
            Why 80,000+ Creators Choose DTFSheet™
          </h3>
          <h2 className="font-bold text-6xl uppercase">
            <span className="text-white relative top-0 left-0">
              <div className="absolute top-2 -left-1 md:top-3 min-h-3/4 w-[105%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              why
            </span>{" "}
            choose us?
          </h2>
        </div>
        <Image
          src={"assets/curvy-circle.svg"}
          height={50}
          width={50}
          alt="bg image"
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
