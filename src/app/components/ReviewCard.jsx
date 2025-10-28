import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReviewCard = ({
  profileImage,
  name,
  time,
  rating,
  review,
  photos,
  key,
}) => {
  return (
    <article className="relative max-w-3xl w-full bg-[#f5f5f5] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
      <div className="absolute top-4 right-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 48 48"
          aria-hidden
          className="drop-shadow-sm"
        >
          <path
            fill="#4285F4"
            d="M43.6 20.2H42V20H24v8h11.3C34.6 32.1 29.9 36 24 36c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.4 0 6.4 1.3 8.6 3.4l6.1-6.1C36.8 2.8 30.7 0 24 0 10.7 0 0 10.7 0 24s10.7 24 24 24c12.4 0 22.7-9 23.9-20.8.1-1.2.1-2.4.1-3z"
          />
          <path
            fill="#34A853"
            d="M6.3 14.7l6.9 5c1.7-4.4 6-7.6 11-7.6 3.4 0 6.4 1.3 8.6 3.4l6.1-6.1C36.8 2.8 30.7 0 24 0 15.5 0 8.3 5.5 6.3 14.7z"
          />
          <path
            fill="#FBBC05"
            d="M24 48c6.7 0 12.8-2.8 17.2-7.3l-8.2-6.6c-2.4 2-5.6 3.2-9 3.2-7 0-12.9-4.9-14.9-11.6l-7 5.5C6.1 40.6 14.3 48 24 48z"
          />
          <path
            fill="#EA4335"
            d="M43.6 20.2H42V20H24v8h11.3c-1.1 3.4-3.4 6.3-6.6 8.3l8.2 6.6C40.9 39.6 46 31.7 46 24c0-1.2 0-2.4-.4-3.6z"
          />
        </svg>
      </div>

      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <Image
            src={profileImage}
            height={100}
            width={300}
            alt="Reviewer avatar"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-800 font-semibold text-lg">{name}</h3>
              <p className="text-sm text-gray-400 mt-0.5">{time}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-[#f8aa00] text-lg font-semibold flex gap-2 items-center">
                <p>{rating}</p>
                <div className="rating">
                  <input
                    type="radio"
                    name={key}
                    disabled
                    className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                    aria-label="1 star"
                    defaultChecked={Math.round(rating) === 1}
                  />
                  <input
                    type="radio"
                    name={key}
                    disabled
                    className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                    aria-label="2 star"
                    defaultChecked={Math.round(rating) === 2}
                  />
                  <input
                    type="radio"
                    name={key}
                    disabled
                    className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                    aria-label="3 star"
                    defaultChecked={Math.round(rating) === 3}
                  />
                  <input
                    type="radio"
                    name={key}
                    disabled
                    className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                    aria-label="4 star"
                    defaultChecked={Math.round(rating) === 4}
                  />
                  <input
                    type="radio"
                    name={key}
                    disabled
                    className="mask mask-star-2 bg-[#f8aa00] -ml-1 max-h-4"
                    aria-label="5 star"
                    defaultChecked={Math.round(rating) === 5}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-4">
            <p className="text-gray-700 text-sm leading-relaxed max-w-[70%] line-clamp-3">
              {review}
            </p>

            <div className="ml-auto flex items-center">
              <div className="flex -space-x-3">
                {photos.map((photo, index) => (
                  <Image
                    key={index}
                    src={photo.image_url}
                    height={100}
                    width={300}
                    alt={`Review photo ${index + 1}`}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3">
            <Link
              href="https://maps.app.goo.gl/njWFZheoMyPMmY519"
              target="blank"
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
