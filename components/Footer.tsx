import React from "react";
import { Props } from "./Nav";

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="p-6 md:p-8 md:py-14 lg:p-10 lg:py-20">
      <h1>{props.sex === "male" ? "À-ONÈ" : "ÀYÈSHÀ_"}</h1>
      <h5>Discover an unforgettable experience where style meets tradition.</h5>
      <div className="flex flex-col">
        <div className="p-1 w-full border-2 border-[#fdfbcce7] flex justify-center cursor-pointer hover:bg-[#fdfbcce7]">
          <svg
          className=""
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#fdfbcce7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19C9.7 19 5.6 18.8 3.9 18.4C3.2 18.2 2.7 17.7 2.5 17C2.2 15.9 2 13.6 2 12C2 10.4 2.2 8.1 2.5 7C2.7 6.3 3.2 5.8 3.9 5.6C5.6 5.2 9.7 5 12 5C14.3 5 18.4 5.2 20.1 5.6C20.8 5.8 21.3 6.3 21.5 7C21.8 8.1 22 10.4 22 12C22 13.6 21.8 15.9 21.5 17C21.3 17.7 20.8 18.2 20.1 18.4C18.4 18.8 14.3 19 12 19Z"
              stroke="#fdfbcce7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 15L15 12L10 9V15Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
