import React from "react";
import HorizontalScroll from "./Scroller";
import { reviewsMen, reviewsWomen } from "./data";
import { Props } from "./Footer";

const Reviews: React.FC<Props> = (props) => {
  return (
    <div className="pb-10 border-b-2 border-[#5a5a5a8b]">
      <div className="p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <h2 className="font-bold text-3xl lg:text-5xl uppercase">
          Our Customer`s Opinion
        </h2>
        <h5 className="text-white">
          Find out what our customers think about{" "}
          {props.sex === "male" ? "À-ONÈ" : "Ayesha"}. Their words are authentic
          testimonies of the experiences lived in our barber chair. Learn how
          we`ve earned the trust and satisfaction of our clients by creating not
          just haircuts and styles, but connections and smiles. Real voices,
          authentic experiences _ at {props.sex === "male" ? "À-ONÈ" : "Ayesha"}
        </h5>
      </div>
      <div
        className={`my-10 flex flex-col gap-10 mask contain-content`}
      >
        <div className={`absolute ${props.sex === 'male' ? 'bg-[#d9d9d92f]' : 'bg-[#75000ca9]'} rounded-full blur-[100px] h-[520px] left-[calc(50.01966181675189% - 1956px / 2)] pointer-events-none top-[calc(52.67034990791899% - 520px / 2)] rotate-[-7deg] w-[1956px] -z-10`} />
        <HorizontalScroll reviews={reviewsMen} direction="left" />
        <HorizontalScroll reviews={reviewsWomen} />
      </div>
    </div>
  );
};

export default Reviews;
