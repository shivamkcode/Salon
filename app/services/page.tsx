"use client";
import React, { useContext } from "react";
import { GenderContext } from "../layout";
import { menuMen, menuWomen } from "@/components/data";
import ServiceItem from "@/components/ServiceItem";
import InfoSection from "@/components/InfoSection";

const Service = () => {
  const gender = useContext(GenderContext);

  return (
    <div
      className={`${
        gender === "male" ? "bg-black" : "bg-[#fc666980]"
      } p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-6 lg:gap-10`}
    >
      <h1 className="text-5xl uppercase font-thin">Our Services</h1>
      <p className="opacity-70 tracking-wide lg:w-[80vw] mx-auto">
        We all deserve to look and feel our best. Why not get pampered while
        doing it? From the moment you enter our salon, you will be met with an
        experience built to tantalize the senses. Sip on a crisp glass of
        champagne or a steaming hot tea while you and your Life-stylist craft a
        styling plan based on your unique wants and needs.
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap justify-evenly gap-4">
        {(gender === "male" ? menuMen : menuWomen).map((item) => (
          <ServiceItem key={item.id} item={item} />
        ))}
      </div>
      <InfoSection sex={gender} />
    </div>
  );
};

export default Service;
