import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Hamburg from "../public/img/hamburg.png";
import Male from "../public/img/male_icon.png";
import Female from "../public/img/female_icon.png";

interface Props {
  sex: string | null;
  handleGenderSelect: any;
}

const Nav: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    props.handleGenderSelect(props.sex === "male" ? "female" : "male");
    localStorage.setItem("gender", props.sex === "male" ? "female" : "male");
  };

  return (
    <>
      <nav
        className={`flex md:gap-2 sticky opacity-90 backdrop-blur-sm w-full top-0 left-0 justify-between items-center p-6 md:px-8 lg:px-10 font-bold z-40 ${
          props.sex == "male"
            ? "bg-black text-white"
            : " bg-[#fff] text-[#483C32]"
        }`}
      >
        <Link className="z-50" href={"/"}>
          <h2 className="cursor-pointer text-2xl font-light tracking-widest hover:scale-105">
            {props.sex === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}
          </h2>
        </Link>
        <div className="hidden md:flex gap-4 lg:gap-8 mx-auto items-center justify-between lg:pl-20">
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#fff] border-[#483C32]"
            } cursor-pointer hover:border-b-2 hover:scale-105`}
            href={`/about`}
          >
            <h3>About</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#fff] border-[#483C32]"
            } cursor-pointer hover:border-b-2 hover:scale-105`}
            href={`/services`}
          >
            <h3>Services</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#fff] border-[#483C32]"
            } cursor-pointer hover:border-b-2 hover:scale-105`}
            href={`/gallery`}
          >
            <h3>Gallery</h3>
          </Link>
          <Link
            className={`${
              props.sex === "male"
                ? "bg-black border-white"
                : "bg-[#fff] border-[#483C32]"
            } cursor-pointer hover:border-b-2 hover:scale-105`}
            href={`/contact`}
          >
            <h3>Contact</h3>
          </Link>
        </div>

        <Link
          className={`${
            props.sex === "male" ? "bg-white text-black" : "bg-black text-white"
          } text-center font-bold hidden md:flex rounded-bl-xl rounded-tr-xl border-pink-300 cursor-pointer p-2 hover:scale-95`}
          href={"/booking"}
        >
          <h2>Book An Appointment</h2>
        </Link>

        <div className="flex gap-6">
          <div className="flex items-center space-x-2 ml-2">
            {" "}
            <span>
              <Image
                style={{
                  filter:
                    props.sex === "male"
                      ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
                      : "invert(48%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(80%) contrast(100%)",
                }}
                className="w-full cursor-pointer hover:scale-105"
                onClick={() => {
                  if (props.sex === "female") {
                    handleToggle();
                  }
                }}
                src={Male}
                alt="M"
                width={20}
                height={20}
              />
            </span>{" "}
            <label className="relative inline-flex items-center cursor-pointer">
              {" "}
              <input
                type="checkbox"
                className="sr-only"
                checked={props.sex === "female"}
                onChange={handleToggle}
              />{" "}
              <div className="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700">
                {" "}
                <div
                  className={`absolute w-6 h-6 ${
                    props.sex === "male" ? "bg-white" : "bg-black"
                  } rounded-full transition-all ${
                    props.sex === "female" ? "translate-x-6" : "translate-x-0"
                  }`}
                />{" "}
              </div>{" "}
            </label>{" "}
            <span>
              <Image
                style={{
                  filter:
                    props.sex === "male"
                      ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
                      : "invert(48%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(80%) contrast(100%)",
                }}
                className="w-full cursor-pointer hover:scale-105"
                onClick={() => {
                  if (props.sex === "male") {
                    handleToggle();
                  }
                }}
                src={Female}
                alt="F"
                width={20}
                height={20}
              />
            </span>{" "}
          </div>
          <div className="z-50">
            {!isOpen && (
              <Image
                style={{
                  filter:
                    props.sex === "male"
                      ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
                      : "invert(48%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(80%) contrast(100%)",
                }}
                className="w-full md:hidden cursor-pointer hover:scale-105"
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
                className={`font-bold md:hidden text-base ${
                  props.sex === "male"
                    ? "bg-white text-black"
                    : "bg-[#483C32] opacity-85 text-[#fff]"
                } rounded-full p-1 h-8 w-8 text-center cursor-pointer hover:scale-105`}
              >
                X
              </h3>
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen
            ? `fixed top-18 left-0 ${
                props.sex === "female"
                  ? "bg-[#fff] text-[#483C32]"
                  : "bg-black text-white"
              } w-full items-center flex flex-col gap-5 py-6 text-center font-bold p-6 md:px-8 lg:px-10 z-10 nav-options-open border-b-2 border-white sm:text-lg md:text-xl lg:text-2xl`
            : `absolute top-18 left-0 ${
                props.sex === "female" ? "bg-[#fff]" : "bg-black text-white"
              } w-full items-center flex flex-col gap-5 py-6 text-center font-bold px-3 nav-options-closed z-10 `
        }`}
      >
        <div className="flex flex-col gap-5 w-full">
          <Link
            className={`${props.sex === 'male' ? "border-white" : "border-[#483C32]"} cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            onClick={() => setIsOpen(false)}
            href={`/about`}
          >
            <h3>About</h3>
          </Link>
          <Link
            className={`${props.sex === 'male' ? "border-white" : "border-[#483C32]"} cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            onClick={() => setIsOpen(false)}
            href={`/services`}
          >
            <h3>Services</h3>
          </Link>
          <Link
            className={`${props.sex === 'male' ? "border-white" : "border-[#483C32]"} cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            onClick={() => setIsOpen(false)}
            href={`/gallery`}
          >
            <h3>Gallery</h3>
          </Link>
          <Link
            className={`${props.sex === 'male' ? "border-white" : "border-[#483C32]"} cursor-pointer p-2 hover:border-b-2 hover:scale-105`}
            onClick={() => setIsOpen(false)}
            href={`/contact`}
          >
            <h3>Contact</h3>
          </Link>
        </div>
        <Link
          onClick={() => setIsOpen(false)}
          className={`${props.sex === 'male' ? "border-white" : "border-[#483C32]"} w-full cursor-pointer p-2 hover:border-2 hover:scale-105`}
          href={`/booking`}
        >
          <h2>Book An Appointment</h2>
        </Link>
      </div>
    </>
  );
};

export default Nav;
