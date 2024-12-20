"use client";
import { GenderContext } from "@/app/layout";
import InfoSection from "@/components/InfoSection";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import React, { useContext, useEffect } from "react";

const About = () => {
  const gender = useContext(GenderContext);

  useEffect(() => {
    document.title = gender === "male" ? "À-ONÈ | About" : "ÀYÈSHÀ_ | About";
  }, [gender]);

  return (
      <div
        className={
          "text-white sm:text-center p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        }
      >
        <h1 className="text-5xl uppercase font-thin">About Us</h1>
        <div className="flex flex-col lg:flex-row md:text-start gap-16 ">
          <div className="flex-1 text-start flex flex-col gap-6 md:gap-10 lg:gap-16 lg:leading-loose my-[auto]">
            <h2 className="text-5xl uppercase font-extralight">
              {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}.
            </h2>
            <p className="opacity-70">
              Welcome to {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}, where we
              specialize in providing top-notch salon services exclusively for
              men. Our team of skilled professionals is dedicated to delivering
              a tailored and sophisticated experience that caters to your unique
              style and grooming needs. Whether you are looking for a classic
              haircut, a modern beard trim, or a refreshing facial treatment, we
              offer a range of services designed to leave you looking and
              feeling your best. At {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"},
              we believe that every man deserves to enjoy a luxurious and
              personalized grooming experience in a comfortable and relaxing
              environment. Join us and discover the difference of high-quality
              salon services crafted just for you.
            </p>
            <Link
              className={`bg-white text-black text-center font-bold rounded-br-xl rounded-bl-xl rounded-tr-xl border-pink-300 cursor-pointer p-2 hover:scale-95`}
              href={"/booking"}
            >
              <h2>Book An Appointment</h2>
            </Link>
          </div>
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0801_29_3421_fu70re.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138854/three_gsdrfv.jpg)]"
            } w-[100%] h-[90vw] lg:w-[48%] lg:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border flex`}
          />
        </div>
        <Reviews sex={gender} />
        <InfoSection sex={gender} />
      </div>
  );
};

export default About;
