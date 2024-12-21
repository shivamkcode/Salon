import React from "react";
import Link from "next/link";

export interface Props {
  sex: string | null;
}

const Footer: React.FC<Props> = (props) => {
  const gender = localStorage.getItem("gender");

  return (
    <footer
      className={`p-6 md:p-8 py-10 md:py-14 lg:p-10 lg:py-20 border-t flex flex-col gap-2`}
    >
      <h1 className="font-extralight text-3xl lg:text-5xl uppercase">
        {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}
      </h1>
      <h5 className="text-white">
        Discover an unforgettable experience where style meets tradition.
      </h5>
      <div className="py-10 md:py-14 lg:py-20 flex flex-col gap-6 md:flex-row">
        <div className="p-2 w-full border-2 border-[#fdfbcce7] flex justify-center cursor-pointer items-center group hover:bg-[#fdfbcce7]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${
                gender === "male"
                  ? "group-hover:stroke-black"
                  : "stroke-[#fdfbcce7] group-hover:stroke-[#DD1619]"
              } stroke-[#fdfbcce7]`}
              d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${
                gender === "male"
                  ? "group-hover:stroke-black"
                  : "group-hover:stroke-[#DD1619]"
              } stroke-[#fdfbcce7]`}
              d="M16 11.3701C16.1234 12.2023 15.9812 13.0523 15.5937 13.7991C15.2062 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4077 15.906C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1903 8.22768 13.4229 8.09402 12.5923C7.96035 11.7616 8.09202 10.91 8.47028 10.1584C8.84854 9.40691 9.45414 8.7938 10.2009 8.4063C10.9477 8.0188 11.7977 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${
                gender === "male"
                  ? "group-hover:stroke-black"
                  : "group-hover:stroke-[#DD1619]"
              } stroke-[#fdfbcce7]`}
              d="M17.5 6.5H17.51"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="p-1 w-full border-2 border-[#fdfbcce7] flex justify-center cursor-pointer items-center group hover:bg-[#fdfbcce7]">
          <svg
            className={`${
              gender === "male"
                ? "group-hover:fill-black"
                : "group-hover:fill-[#DD1619]"
            } `}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#fdfbcce7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${
                gender === "male"
                  ? " group-hover:stroke-black"
                  : "group-hover:stroke-[#DD1619]"
              } stroke-none`}
              d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="p-1 w-full border-2 border-[#fdfbcce7] flex justify-center cursor-pointer items-center group hover:bg-[#fdfbcce7]">
          <svg
            className={`${
              gender === "male"
                ? "group-hover:fill-black"
                : "group-hover:fill-[#DD1619]"
            } `}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#fdfbcce7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${
                gender === "male"
                  ? "group-hover:stroke-black"
                  : "group-hover:stroke-[#DD1619]"
              } `}
              d="M12 19C9.7 19 5.6 18.8 3.9 18.4C3.2 18.2 2.7 17.7 2.5 17C2.2 15.9 2 13.6 2 12C2 10.4 2.2 8.1 2.5 7C2.7 6.3 3.2 5.8 3.9 5.6C5.6 5.2 9.7 5 12 5C14.3 5 18.4 5.2 20.1 5.6C20.8 5.8 21.3 6.3 21.5 7C21.8 8.1 22 10.4 22 12C22 13.6 21.8 15.9 21.5 17C21.3 17.7 20.8 18.2 20.1 18.4C18.4 18.8 14.3 19 12 19Z"
              stroke="#fdfbcce7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${
                gender === "male" ? "stroke-black " : "stroke-[#DD1619] "
              } group-hover:stroke-[#fdfbcce7]`}
              d="M10 15L15 12L10 9V15Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="p-1 w-full border-2 border-[#fdfbcce7] flex justify-center cursor-pointer items-center group hover:bg-[#fdfbcce7]">
          <svg
            className={`${
              gender === "male"
                ? "group-hover:fill-black"
                : "group-hover:fill-[#DD1619]"
            } `}
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#fdfbcce7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${
                gender === "male"
                  ? "group-hover:stroke-black"
                  : "group-hover:stroke-[#DD1619]"
              } stroke-[#fdfbcce7]`}
              d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <h1 className="font-extralight text-3xl lg:text-5xl uppercase">Useful Links</h1>
      <div className="flex flex-col justify-center md:flex-row flex-wrap gap-6 py-6 md:py-10">
        <Link
          className="border rounded-tl-none rounded-br-none rounded-xl md:w-60 p-2 text-center hover:border-[#F6CC6F] hover:text-[#F6CC6F] hover:scale-95"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="border rounded-tl-none rounded-br-none rounded-xl md:w-60 p-2 text-center hover:border-[#F6CC6F] hover:text-[#F6CC6F] hover:scale-95"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="border rounded-tl-none rounded-br-none rounded-xl md:w-60 p-2 text-center hover:border-[#F6CC6F] hover:text-[#F6CC6F] hover:scale-95"
          href={"/services"}
        >
          Services
        </Link>
        <Link
          className="border rounded-tl-none rounded-br-none rounded-xl md:w-60 p-2 text-center hover:border-[#F6CC6F] hover:text-[#F6CC6F] hover:scale-95"
          href={"/gallery"}
        >
          Gallery
        </Link>
        <Link
          className="border rounded-tl-none rounded-br-none rounded-xl md:w-60 p-2 text-center hover:border-[#F6CC6F] hover:text-[#F6CC6F] hover:scale-95"
          href={"/contact"}
        >
          Contact
        </Link>
      </div>
      <div className="py-10 md:py-14 lg:py-20 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <h1 className="font-extralight text-3xl lg:text-5xl uppercase">Gallery</h1>
        <div className="grid grid-cols-3 grid-rows-4 gap-4 lg:gap-8 h-[90vw]">
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0801_29_3421_fu70re.jpg)]"
                : "bg-[url(https://i.ibb.co/rQZNwC8/IMG-20220829-WA0018.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240425_2017_37_3631_dmg3vn.jpg)]"
                : "bg-[url(https://i.ibb.co/qsGmktp/IMG-20220829-WA0019.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500 row-span-2`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240426_0805_53_9911_ecssje.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138854/three_gsdrfv.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714326088/firza-pratama-zRshOvj0K4o-unsplash_w7h9vf.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138853/six_djsouq.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500 row-span-2`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133320/IMG_COM_20240426_0805_08_2881_abtz4x.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138851/four_a6kygx.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500 row-span-2`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0803_56_5331_zigxgw.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714138850/five_ldhrz7.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500 row-span-2`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0802_16_7971_nmksl7.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139441/vsco_041924_rgrugo.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500`}
          />
          <div
            className={`${
              gender === "male"
                ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0803_21_7691_sugwdl.jpg)]"
                : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/george-bohunicky-qJKT2rMU0VU-unsplash_1_twowu6.jpg)]"
            } bg-cover bg-no-repeat bg-center border-gray-600 border filter grayscale-0 hover:grayscale transition duration-500`}
          />
        </div>
      </div>
      <div className="mt-6 text-center text-sm lg:text-lg text-white opacity-70">
        &copy; {new Date().getFullYear()}{" "}
        {gender === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
