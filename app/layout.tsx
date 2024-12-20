"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const GenderContext = React.createContext<string>(("none"));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [gender, setGender] = useState<string | null>("none");

  useEffect(() => {
    const storedGender = localStorage.getItem("gender");
    if (storedGender) {
      setGender(storedGender);
    } else {
      setGender(null)
    }
  }, []);

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
    localStorage.setItem("gender", selectedGender);
  };

  return (
    <html lang="en">
      <body
        className={`${inter.className} ${
          gender === "male"
            ? "bg-black opacity-95 text-white"
            : "bg-[#B4846C] text-black"
        } sm:text-center `}
      >
        {!gender && (
          <>
            <div className="h-full w-full bg-black opacity-70 filter backdrop-blur-3xl fixed top-0 left-0 z-50" />
            <div className="bg-white fixed w-[80vw] sm:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col gap-2 p-8 text-center z-50">
              <div className="uppercase tracking-wider text-2xl md:text-4xl lg:text-5xl text-black opacity-80 font-semibold">
                Welcome
              </div>
              <p className=" text-gray-500 text-sm">
                Select your gender for a rich and tailored experience
              </p>

              <div className="flex mt-4 justify-evenly text-gray-500">
                <div className="flex flex-col gap-4 ">
                  <div
                    onClick={() => handleGenderSelect("male")}
                    className="bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714155716/Male-min_qeny5d.png)] w-20 sm:w-28
                    sm:h-28 h-20 bg-contain rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition duration-500"
                  />
                  <h5 className="font-bold">Men</h5>
                </div>
                <div className="flex flex-col gap-4 ">
                  <div
                    onClick={() => handleGenderSelect("female")}
                    className="bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714155716/Female-min_vhhjoq.png)] w-20 sm:w-28
                    sm:h-28 h-20 bg-contain rounded-lg cursor-pointer filter grayscale hover:grayscale-0 transition duration-500"
                  />
                  <h5 className="font-bold">Women</h5>
                </div>
              </div>
            </div>
          </>
        )}
        {gender !== "none" && <Nav sex={gender} handleGenderSelect={handleGenderSelect} />}
        <GenderContext.Provider value={gender}>
          {children}
        </GenderContext.Provider>
        {gender !== "none" && <Footer sex={gender} />}
      </body>
    </html>
  );
}

