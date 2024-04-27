"use client";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import LookBook from "@/components/LookBook";
import Nav from "@/components/Nav";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState<string>("both");
  return (
    <>
      {gender === "both" && (
        <>
          <div className="h-full w-full bg-black opacity-70 filter backdrop-blur-3xl fixed top-0 left-0 z-50" />
          <div className="bg-white fixed w-[80vw] sm:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col gap-2 p-8 text-center z-50">
            <div className="uppercase tracking-wider text-2xl md:text-4xl lg:text-5xl text-black opacity-80 font-semibold">
              Welcome to our site
            </div>
            <p className=" text-gray-500 text-sm">
              Select your gender for a rich and tailored experience
            </p>

            <div className="flex mt-4 justify-evenly text-gray-500">
              <div className="flex flex-col gap-4 ">
                <div
                  onClick={() => setGender("male")}
                  className="bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714155716/Male-min_qeny5d.png)] w-20 sm:w-28
                  sm:h-28 h-20 bg-contain rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition duration-500"
                />
                <h5 className="font-bold">Men</h5>
              </div>
              <div className="flex flex-col gap-4 ">
                <div
                  onClick={() => setGender("female")}
                  className="bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714155716/Female-min_vhhjoq.png)] w-20 sm:w-28
                  sm:h-28 h-20 bg-contain rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition duration-500"
                />
                <h5 className="font-bold">Women</h5>
              </div>
            </div>
          </div>
        </>
      )}
      {gender && (
        <main
          className={`${
            gender === "male" ? "bg-black opacity-95 " : "bg-[#483C32]"
          } sm:text-center text-[#D1C6BD]`}
        >
          <Nav sex={gender} />
          <Hero sex={gender} />
          <InfoSection sex={gender} />
          <div className="bg-[#ffffff1c] p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4">
            <h2 className="font-bold text-3xl lg:text-5xl uppercase">
              Make your own momentum
            </h2>
            <h5>
              {gender === "male"
                ? "Every haircut, every shave and every experience spent with us are not just services, but stages in a common journey towards confidence and happiness. We are proud to be a part of your story and excited to build another year of smiles and satisfaction together."
                : "Experience the ultimate in hair care with our beauty salon`s wide range of hair services, including cuts, color, styling, and extensions. Our experienced stylists use only the highest quality products to ensure your hair looks and feels its best. Visit us today and discover the perfect style for you."}
            </h5>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-10 my-10">
              <div className="flex flex-col gap-2">
                <h2
                  className={`text-6xl font-bold sm:text-center ${
                    gender === "male" ? "text-[#e7edbd]" : "text-white opacity-85"
                  }`}
                >
                  2
                </h2>
                <h2 className="text-2xl">Years Experience</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className={`text-6xl font-bold sm:text-center ${
                    gender === "male" ? "text-[#e7edbd]" : "text-white opacity-85"
                  }`}
                >
                  100+
                </h2>
                <h2 className="text-2xl">Saisfied Customers</h2>
              </div>
            </div>
          </div>
          <Services sex={gender} />
          <Reviews sex={gender} />
          <LookBook sex={gender} />
        </main>
      )}
    </>
  );
}
