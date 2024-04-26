import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Star from "../public/img/Star.svg";

interface Review {
  id: number;
  text: string;
  author: string;
  image: string;
  stars: number;
}

interface ReviewsProps {
  reviews: Review[];
  direction?: string;
}

const HorizontalScroll: React.FC<ReviewsProps> = ({
  reviews,
  direction = "right",
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let currentSpeed: number = 2;
    const handleMouseEnter = () => (currentSpeed = 1);
    const handleMouseLeave = () => (currentSpeed = 2);

    if (scrollElement) {
      scrollElement.addEventListener("mouseenter", handleMouseEnter);
      scrollElement.addEventListener("mouseleave", handleMouseLeave);

      const scrollWidth = scrollElement.scrollWidth;

      let scrollPos = 0;
      const scrollInterval = setInterval(() => {
        scrollPos += direction === "right" ? currentSpeed : -currentSpeed;

        if (scrollPos >= scrollWidth) {
          scrollPos = 0;
        }

        scrollElement.scrollLeft = scrollPos;
      }, 30);

      return () => {
        clearInterval(scrollInterval);
        scrollElement.removeEventListener("mouseenter", handleMouseEnter);
        scrollElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="py-10">
      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-scroll mask bg-gradient-to-r from-black to-[#706f6f38]"
      >
        <div className="flex text-left cursor-grab">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[624px] flex gap-4 h-80 p-10 mr-4 border border-gray-500-2"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold text-3xl">{review.author}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: review.stars }, (_, index) => (
                    <Image
                      style={{
                        filter:
                          "invert(40%) sepia(150%) saturate(100%) hue-rotate(345deg) brightness(81%) contrast(108%)",
                      }}
                      key={index}
                      src={Star}
                      alt="Star"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
              <div className="min-w-60 h-60 overflow-hidden relative border border-white">
                <Image
                  src={review.image}
                  alt={`author-${reviews}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          ))}
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[624px] flex gap-4 h-72 p-6 mr-4 border border-gray-500-2"
            >
              <div className="flex flex-col gap-2">
                <p className="font-bold text-3xl">{review.author}</p>
                <div className="flex items-center mb-2">
                  {Array.from({ length: review.stars }, (_, index) => (
                    <Image
                      style={{
                        filter:
                          "invert(40%) sepia(150%) saturate(100%) hue-rotate(345deg) brightness(81%) contrast(108%)",
                      }}
                      key={index}
                      src={Star}
                      alt="Star"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
              <div className="min-w-60 h-60 overflow-hidden relative border border-white">
                <Image
                  src={review.image}
                  alt={`author-${reviews}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
