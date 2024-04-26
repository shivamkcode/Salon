import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburg from "../public/img/hamburg.png";

export interface Props {
  sex: string;
}

const Nav: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`flex fixed w-full top-0 left-0 justify-between items-center p-4 md:px-8 lg:px-10 sm:text-lg md:text-xl lg:text-2xl z-40 ${
          props.sex == "male" ? "bg-black text-white" : " bg-[#e8792a]"
        }`}
      >
        <Link className="z-50" href={"/"}>
          <h2 className="font-bold cursor-pointer">
            {props.sex === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}
          </h2>
        </Link>
        <div className="z-50">
          {!isOpen && (
            <Image
              style={{
                filter:
                  props.sex === "male"
                    ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
                    : "",
              }}
              className="w-full cursor-pointer hover:scale-105"
              onClick={() => setIsOpen(!isOpen)}
              src={Hamburg}
              alt="burger"
              width={20}
              height={20}
            />
          )}
          {isOpen && (
            <h3
              onClick={() => setIsOpen(!isOpen)}
              className={`font-bold text-base ${
                props.sex === "male"
                  ? "bg-white text-black"
                  : "bg-black opacity-85 text-[#e87e31]"
              } rounded-full p-1 h-8 w-8 text-center cursor-pointer hover:scale-105`}
            >
              X
            </h3>
          )}
        </div>
      </nav>
      <div
        className={`${
          isOpen
            ? `fixed top-14 left-0 ${
                props.sex === "female" ? "bg-[#e87e31]" : "bg-black text-white"
              } w-full items-center flex flex-col gap-5 py-6 text-center font-bold p-6 md:px-8 lg:px-10 z-10 nav-options-open border-b-2 border-white sm:text-lg md:text-xl lg:text-2xl`
            : `absolute top-14 left-0 ${
              props.sex === "female" ? "bg-[#e87e31]" : "bg-black text-white"
            } w-full items-center flex flex-col gap-5 py-6 text-center font-bold px-3 z-10 nav-options-closed`
        }`}
      >
        <div className="flex flex-col gap-5 w-full">
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#e87e31] border-white"
            } cursor-pointer p-6 md:px-8 lg:px-10 hover:border-b-2 hover:scale-105`}
            href={"/about"}
          >
            <h3>About</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#e87e31] border-white"
            } cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            href={"/services"}
          >
            <h3>Services</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#e87e31] border-white"
            } cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            href={"/gallery"}
          >
            <h3>Gallery</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#e87e31] border-white"
            } cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            href={"/contact"}
          >
            <h3>Contact</h3>
          </Link>
        </div>
        <Link
          className={`${
            props.sex === "male"
              ? "bg-black border-white"
              : "bg-[#e87e31] border-white"
          } w-full cursor-pointer p-2 hover:border-2 hover:scale-105`}
          href={"/booking"}
        >
          <h2>Book An Appointment</h2>
        </Link>
      </div>
    </>
  );
};

export default Nav;