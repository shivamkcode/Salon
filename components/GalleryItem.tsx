import React from "react";

interface Props {
  prop: string;
}

const GalleryItem: React.FC<Props> = ({ prop }) => {
  return (
    <div
    style={{
        background: `url(${prop})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
      className={`w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
    />
  );
};

export default GalleryItem;
