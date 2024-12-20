import React from "react";
import { menuMen, menuWomen } from "./data";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { Props } from "./Footer";

const Services: React.FC<Props> = (props) => {
  return (
    <div className="p-6 md:p-8 md:py-10 lg:py-16 lg:p-10 flex flex-col gap-4 md:gap-8 lg:gap-14 border-b-2 text-white">
      <h1 className="font-bold text-3xl lg:text-5xl uppercase">
        Browse Our Services
      </h1>
      <h5>
        Experience sophistication, where passion for{" "}
        {props.sex === "male" ? "barbering" : "beauty"} meets modern elegance.
        Discover premium services and personalized experiences for a flawless
        look.
      </h5>
      {(props.sex === "male" ? menuMen : menuWomen).map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
      <Link
        className={`text-white border-2 text-center font-bold border-white cursor-pointer uppercase p-2 hover:scale-95`}
        href={`/services`}
      >
        <h2>Browse Our Services</h2>
      </Link>
    </div>
  );
};

export default Services;
