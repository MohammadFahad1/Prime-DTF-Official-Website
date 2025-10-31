import Image from "next/image";
import React from "react";

const FeatureHighlights = () => {
  return (
    <section className="min-h-screen w-full md:py-20 md:px-10 py-5 px-4">
      {/* Cards Header */}
      <div className="max-w-[1000px] mx-auto gap-5">
        <div className="text-center">
          <h3 className="text-md md:text-xl tracking-tighter leading-8 uppercase font-semibold">
            How DTFSheet™ Works for You
          </h3>
          <h2 className="font-bold text-3xl md:text-6xl uppercase tracking-tighter">
            FEATURE{" "}
            <span className="text-white relative top-0 left-0">
              <div className="absolute top-2 -left-1 md:top-3 min-h-3/4 w-[103%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              HIGHLIGHTS
            </span>
          </h2>
        </div>
      </div>
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-15">
        <div>
          <Image
            src={"/assets/dtf-print-shirt.jpg"}
            width={500}
            height={600}
            alt="bg image"
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="uppercase text-xl tracking-tighter mb-3.5 font-semibold">
            Make Your Designs Pop
          </h3>
          <h2
            className="uppercase text-5xl tracking-tighter mb-3 font-semibold"
            style={{ lineHeight: 1.5 }}
          >
            CREATE BOLD, EYE-CATCHING DESIGNS WITH DTF TRANSFERS THAT sELL
          </h2>
          <button className="bg-black px-5 py-3 rounded-md text-xl text-white uppercase font-semibold hover:scale-105 transition-transform cursor-pointer tracking-tighter mt-5">
            Try It Now
          </button>
        </div>
        {/* Card 2 Ends */}
      </div>
    </section>
  );
};

export default FeatureHighlights;
