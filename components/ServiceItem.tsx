import React from "react";
import { ItemProps } from "./MenuItem";
import Link from "next/link";

const ServiceItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col bg-gray-300 w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] border-gray-600 border p-4 md:p-8 text-start gap-6 md:gap-8">
      <div className="flex justify-between gap-6">
        <h3 className="font-bold text-xl">{item.name}</h3>
        <h4 className="text-xl">${item.price}</h4>
      </div>
      <p>{item.description}</p>
      <Link
        className={`bg-white text-black text-center font-bold rounded-br-xl rounded-bl-xl rounded-tr-xl border-pink-300 cursor-pointer p-2 hover:scale-95`}
        href={"/booking"}
      >
        <h2>Book An Appointment</h2>
      </Link>
    </div>
  );
};

export default ServiceItem;
