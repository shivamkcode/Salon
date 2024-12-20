"use client"
import Services from "@/components/Services";
import React, { useContext } from "react";
import { GenderContext } from "../layout";
import { menuMen, menuWomen } from "@/components/data";
import MenuItem from "@/components/MenuItem";
import ServiceItem from "@/components/ServiceItem";

const Service = () => {
  const gender = useContext(GenderContext);

  return (
    <div
      className={`${
        gender === "male"
          ? "bg-black"
          : "bg-[#fc666980]"
      } flex flex-col contain-content sm:flex-row flex-wrap justify-evenly gap-4 lg:gap-8 p-6 md:p-8 lg:p-10 md:py-10 lg:py-16`}
    >
      {(gender === "male" ? menuMen : menuWomen).map((item) => (
        <ServiceItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Service;
