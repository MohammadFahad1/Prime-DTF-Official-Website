import Image from "next/image";
import React from "react";

const ImagePreview = ({ image, alt }) => {
  return (
    <div>
      <Image
        src={image}
        height={600}
        width={400}
        className="rounded w-full h-auto"
        alt={alt}
      />
    </div>
  );
};

export default ImagePreview;
