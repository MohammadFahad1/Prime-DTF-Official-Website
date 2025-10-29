"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [AllReviews, setAllReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/place-details");
        const data = await response.json();

        setAllReviews(data.reviews.sort((a, b) => b.time - a.time));
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        spaceBetween={20}
        freeMode={false}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {AllReviews &&
          AllReviews.map((review, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <ReviewCard
                profileImage={review.profile_photo_url}
                name={review.author_name}
                time={review.relative_time_description}
                rating={review.rating}
                review={review.text}
                photos={review.photos}
                reviewKey={review.time}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Reviews;
