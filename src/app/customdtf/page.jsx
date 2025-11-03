"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ImagePreview from "./components/ImagePreview";

const page = () => {
  const dtfSheets = [
    {
      id: 1,
      name: '2" X 2"',
      images: [
        "/assets/dtfsheets/dtfsheet2.png",
        "/assets/dtfsheets/dtfsheet1.png",
        "/assets/dtfsheets/dtfsheet3.jpeg",
      ],
      alt: "Helo",
    },
    {
      id: 2,
      name: '3" X 3"',

      images: [
        "/assets/dtfsheets/dtfsheet1.png",
        "/assets/dtfsheets/dtfsheet2.png",
        "/assets/dtfsheets/dtfsheet3.jpeg",
      ],
      alt: "Hello",
    },
    {
      id: 3,
      name: '4" X 4"',

      images: [
        "/assets/dtfsheets/dtfsheet3.jpeg",
        "/assets/dtfsheets/dtfsheet1.png",
        "/assets/dtfsheets/dtfsheet2.png",
      ],
      alt: "Helo",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="sheetpreview"
            >
              {dtfSheets.map((sheet) => {
                return (
                  <SwiperSlide key={sheet.id}>
                    <ImagePreview image={sheet.images[0]} alt={sheet.alt} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <div className="max-w-prose md:max-w-none">
              <h1 className="text-2xl md:text-5xl font-extrabold text-center">
                Custom Image to DTFSheet™ Transfer
              </h1>
              <p className="md:text-lg text-sm text-center py-2">
                DTF transfers adhere to fabrics like cotton, polyester, and
                blends, delivering vibrant and durable prints perfect for
                apparel and textiles.
              </p>
              <div className="my-3 md:my-5 flex flex-wrap items-center justify-center gap-5">
                {dtfSheets.map((sheet) => {
                  return (
                    <button
                      key={sheet.id}
                      className="border-2 border-gray-800 px-3 py-1 md:py-2 rounded-full text-gray-800 font-bold hover:bg-gray-800 hover:text-white hover:border-gray-900 transition-colors duration-300 cursor-pointer flex items-center gap-4"
                    >
                      <Image
                        src={sheet.images[0]}
                        height={40}
                        width={40}
                        className="rounded w-10 h-auto"
                        alt="Helo"
                      />
                      <b>2&quot; X 2&quot;</b>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
