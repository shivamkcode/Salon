"use client";
import React, { useContext } from "react";
import { ItemProps } from "./MenuItem";
import Link from "next/link";
import { GenderContext } from "@/app/layout";

const ServiceItem: React.FC<ItemProps> = ({ item }) => {
  const gender = useContext(GenderContext);

  return (
    <div
      className={`flex flex-col bg-white opacity-95 text-black w-[100%] sm:w-[48%] lg:w-[31%] border-gray-600 border p-4 md:p-8 text-start gap-6 rounded-xl rounded-tl-none rounded-br-none contain-content`}
    >
      <div
        className={`absolute ${
          gender === "male" ? "bg-[#3a383849]" : "bg-[#75000c65]"
        } rounded-full blur-[100px] h-[220px] left-[calc(50.01966181675189% - 1956px / 2)] pointer-events-none top-[calc(52.67034990791899% - 420px / 2)] rotate-[-7deg] w-[1956px] -z-10`}
      />
      <div className="flex justify-between gap-6">
        <h3 className="font-bold text-xl">{item.name}</h3>
        <h4 className="text-xl">${item.price}</h4>
      </div>
      <p>{item.description}</p>
      <Link
        className={`bg-black text-white text-center font-bold rounded-br-lg rounded-bl-lg rounded-tr-lg border-pink-300 cursor-pointer p-2 hover:scale-95 mb-0 mt-auto`}
        href={"/booking"}
      >
        <h2>Book Now</h2>
      </Link>
    </div>
  );
};

export default ServiceItem;
