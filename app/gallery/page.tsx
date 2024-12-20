"use client";
import React, { useContext, useEffect } from "react";
import { GenderContext } from "../layout";
import { menImages, womenImages } from "@/components/data";
import GalleryItem from "@/components/GalleryItem";
import InfoSection from "@/components/InfoSection";

const Gallery = () => {
  const gender = useContext(GenderContext);

  useEffect(() => {
          document.title = gender === "male" ? "À-ONÈ | Gallery" : "ÀYÈSHÀ_ | Gallery";
        }, [gender]);

  return (
    <div
      className={`${
        gender === "male" ? "bg-black" : "bg-[#af4d7398]"
      } text-white sm:text-center p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10`}
    >
      <h1 className="text-5xl uppercase font-thin">Gallery</h1>
      <p className="tracking-wider opacity-75 lg:w-[80vw] mx-auto">Taking the art of barbering to another level, {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"} presents you with a
        collection of images from our world of style and elegance. Discover
        moments captured in our barber chair, where haircuts become works of art
        and every shave is an unforgettable experience. Browse our photo gallery
        to feel the atmosphere and passion that define {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}.</p>
      <div
        className={`flex ${
          gender === "male" ? "flex-col" : "flex-col-reverse"
        } contain-content sm:flex-row flex-wrap justify-evenly gap-4 lg:gap-8`}
      >
        {menImages.sort(() => Math.random() - 0.5).map((item) => (
          <GalleryItem prop={item.url} key={item.id} />
        ))}
        {womenImages.sort(() => Math.random() - 0.5).map((item) => (
          <GalleryItem prop={item.url} key={item.id} />
        ))}
      </div>
      <InfoSection sex={gender}/>
    </div>
  );
};

export default Gallery;
