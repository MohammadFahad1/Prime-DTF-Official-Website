import React from "react";

export default function HeroSection() {
  const VIDEO_URL = "/assets/hero-section-bg.mp4";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-section-bg.mp4"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative flex items-center justify-center min-h-screen text-neutral-content text-center z-20 p-4">
        <div className="bg-transparent p-4 rounded-xl">
          <h3 className="text-xl font-bold uppercase text-white">
            Made for Creators
          </h3>
          <h1 className="mb-5 text-8xl font-bold text-white tracking-tighter leading-none">
            CUSTOM <span className="bg-[#D55027] px-2 pr-4 rounded">DTF</span>
            <br />
            TRANSFERS
          </h1>
          <p className="mb-8 text-lg font-light text-gray-200">
            This component uses a self-playing, looped, and muted video, which
            is crucial for modern browser compatibility and a smooth user
            experience.
          </p>
          <button className="btn btn-primary btn-lg shadow-lg hover:shadow-xl transition-shadow">
            Explore Features
          </button>
        </div>
      </div>
    </div>
  );
}
