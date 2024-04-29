import React from "react";
import { Props } from "./Nav";

const LookBook: React.FC<Props> = (props) => {
  return (
    <div
      className={`p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 ${
        props.sex === "male" ? "" : "bg-[#7D5A50]"
      }`}
    >
      <h2 className="font-bold text-3xl lg:text-5xl uppercase">LookBook</h2>
      <h5 className="text-white">
        Taking the art of barbering to another level, À-ONÈ presents you with a
        collection of images from our world of style and elegance. Discover
        moments captured in our barber chair, where haircuts become works of art
        and every shave is an unforgettable experience. Browse our photo gallery
        to feel the atmosphere and passion that define À-ONÈ.
      </h5>
      <div className="flex flex-col contain-content sm:flex-row flex-wrap justify-evenly gap-4 lg:gap-8">
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0801_29_3421_fu70re.jpg)]"
              : "bg-[url(https://i.ibb.co/rQZNwC8/IMG-20220829-WA0018.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500`}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240425_2017_37_3631_dmg3vn.jpg)]"
              : "bg-[url(https://i.ibb.co/qsGmktp/IMG-20220829-WA0019.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240426_0805_53_9911_ecssje.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138854/three_gsdrfv.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714326088/firza-pratama-zRshOvj0K4o-unsplash_w7h9vf.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138853/six_djsouq.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240426_0805_08_2881_abtz4x.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138851/four_a6kygx.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0803_56_5331_zigxgw.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138850/five_ldhrz7.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0802_16_7971_nmksl7.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139441/vsco_041924_rgrugo.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
        <div
          className={`${
            props.sex === "male"
              ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0803_21_7691_sugwdl.jpg)]"
              : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/george-bohunicky-qJKT2rMU0VU-unsplash_1_twowu6.jpg)]"
          } w-[100%] h-[90vw] sm:w-[48%] sm:h-[45vw] bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale hover:grayscale-0 transition duration-500 `}
        />
      </div>
    </div>
  );
};

export default LookBook;
