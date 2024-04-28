'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [gender, setGender] = useState<string>("both");

  return (
    <html lang="en">
      <body className={inter.className}>
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
        {gender !== "both" && <Nav sex={gender} />}
        <GenderContext.Provider value={gender}>
          {children}
        </GenderContext.Provider>
      </body>
    </html>
  );
}

export const GenderContext = React.createContext<string>("both");