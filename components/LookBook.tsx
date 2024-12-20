import React from "react";
import { Props } from "./Footer";
import GalleryItem from "./GalleryItem";
import { menImages, womenImages } from "./data";

const LookBook: React.FC<Props> = (props) => {
  return (
    <div
      className={`p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 ${
        props.sex === "male" ? "" : "bg-[#b48071bd]"
      }`}
    >
      <h2 className="font-bold text-3xl lg:text-5xl uppercase">LookBook</h2>
      <h5 className="text-white">
        Taking the art of barbering to another level, {props.sex === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"} presents you with a
        collection of images from our world of style and elegance. Discover
        moments captured in our barber chair, where haircuts become works of art
        and every shave is an unforgettable experience. Browse our photo gallery
        to feel the atmosphere and passion that define {props.sex === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}.
      </h5>
      <div className="flex flex-col contain-content sm:flex-row flex-wrap justify-evenly gap-4 lg:gap-8">
        {props.sex === "male" ? (menImages.sort(() => Math.random() - 0.5).map(item => (
          <GalleryItem prop={item.url} key={item.id} />
        ))) : ""}
        {props.sex === "female" ? (womenImages.sort(() => Math.random() - 0.5).map(item => (
          <GalleryItem prop={item.url} key={item.id} />
        ))) : ""}
      </div>
    </div>
  );
};

export default LookBook;
