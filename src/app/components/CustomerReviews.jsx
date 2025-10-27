"use client";
import Image from "next/image";
import React, { use, useEffect } from "react";

const CustomerReviews = () => {
  const fetchReviews = async () => {
    const placeId = "YOUR_PLACE_ID";
    const apiKey = process.env.GOOGLE_API_KEY;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.GOOGLE_PLACE_ID}&fields=name,rating,user_ratings_total,reviews&key=${process.env.GOOGLE_MAP_API_KEY}`
    );

    const data = await response.json();
    return data.result.reviews;
  };

  useEffect(() => {
    fetchReviews().then((reviews) => {
      console.log(reviews);
    });
  }, []);

  return (
    <section className="min-h-screen w-full md:py-20 md:px-10 py-5 px-4">
      <h3 className="md:text-xl text-md font-semibold uppercase text-center md:text-left">
        2,090+ verıfıed 5-star revıews
      </h3>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2.5">
        <h2 className="mb-5 mt-2 text-3xl md:text-6xl font-semibold text-black tracking-tighter uppercase md:leading-none">
          DTFSheet™{" "}
          <span className="md:block tracking-[-0.09em]">
            Customer{" "}
            <span className="text-[#19181E] relative top-0 left-0">
              <div className="absolute top-2 left-0 md:top-3 min-h-3/4 w-[103%] bg-[#D55027] px-2 pr-4 rounded -z-10"></div>
              Reviews
            </span>
          </span>
        </h2>

        <div className="p-3 md:p-4 bg-[#f5f5f5] w-full md:w-auto min-w-[300px] rounded">
          <h3 className="font-semibold text-md md:text-3xl tracking-tight text-center">
            2090+ REVIEWS <br />
            <span
              className="text-[#19181E] relative top-0 left-1"
              style={{ zIndex: 1 }}
            >
              <div
                className="absolute top-1 -left-0.5 md:top-2 min-h-3/4 w-[107%] bg-[#20d4ba] px-2 pr-4 rounded"
                style={{ zIndex: -1 }}
              ></div>
              ON GOOGLE
            </span>
            <br />
            <p className="pt-3 underline">4.9/5.0</p>
          </h3>
        </div>
      </div>

      {/* Head Review */}
      <div className="card bg-[#f5f5f5] flex flex-row gap-3 p-5 justify-items-start items-center mt-10 mb-5 max-w-4xl rounded-2xl md:mx-auto">
        <div className="avatar max-w-20">
          <div className="w-14 rounded-full">
            <Image
              src="/assets/clent.jpg"
              alt="Client Photo"
              height={60}
              width={60}
            />
          </div>
        </div>
        <div>
          <p className="text-md font-semibold">
            DTF Sheet | Custom Shirt Transfers
          </p>
          <div className="text-[#f8aa00] text-lg font-semibold flex gap-2 items-center">
            <p>4.9</p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                disabled
                className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                disabled
                className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                aria-label="2 star"
              />
              <input
                type="radio"
                name="rating-2"
                disabled
                className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-2"
                disabled
                className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-2"
                disabled
                className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                aria-label="5 star"
                defaultChecked
              />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm text-gray-500 md:text-md">2077 reviews on</p>{" "}
            <Image
              src="/assets/google.png"
              alt="Google Logo"
              height={20}
              width={80}
              className="h-5 min-w-16 w-auto mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
