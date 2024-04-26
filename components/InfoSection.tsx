import Link from "next/link";
import React from "react";
import { Props } from "./Nav";

const InfoSection: React.FC<Props> = (props) => {
  return (
    <div className={`flex flex-col md:flex-row ${props.sex === 'male' ? 'bg-black opacity-95 text-white' : ''} gap-8 p-6 md:p-8 lg:p-10 justify-center md:justify-evenly items-center md:items-start text-center`}>
      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4  items-center">
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
            stroke= 'white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
            stroke='white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-bold text-2xl lg:text-4xl uppercase ">Location</h2>
        <h3>Address will go here</h3>
        <Link href={"/"}>See On Map</Link>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4  items-center">
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke='white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6V12H16.5"
            stroke='white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-bold text-2xl lg:text-4xl uppercase">Opening Hours</h2>
        <h3>Mon to Fri: 9.00am - 8.30pm</h3>
        <h3>Sat: 10.00am - 6.30pm</h3>
        <h3>Sun: Closed</h3>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 lg:gap-4  items-center">
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4741 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4018C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.945 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3146 6.72539 15.2661 5.19006 12.85C3.50003 10.2412 2.4483 7.27097 2.12006 4.17997C2.09507 3.90344 2.12793 3.62474 2.21656 3.3616C2.30518 3.09846 2.44763 2.85666 2.63482 2.6516C2.82202 2.44653 3.04986 2.28268 3.30385 2.1705C3.55783 2.05831 3.8324 2.00024 4.11006 1.99997H7.11006C7.59536 1.9952 8.06585 2.16705 8.43382 2.48351C8.80179 2.79996 9.04213 3.23942 9.11005 3.71997C9.23668 4.68004 9.47151 5.6227 9.81006 6.52997C9.9446 6.8879 9.97372 7.27689 9.89396 7.65086C9.81421 8.02482 9.62892 8.36809 9.36005 8.63998L8.09006 9.90997C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0554 17.4701 14.19C18.3773 14.5285 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z"
            stroke='white'
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-bold text-2xl lg:text-4xl uppercase">Contact</h2>
        <h3>Phone number</h3>
        <h3>Email</h3>
      </div>
    </div>
  );
};

export default InfoSection;
