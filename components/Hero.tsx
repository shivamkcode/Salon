import Link from "next/link";
import React from "react";
import { Props } from "./Nav";

const Hero: React.FC<Props> = (props) => {
    const male = props.sex === 'male'
  return (
    <section className={`${male ? 'bg-[url("../public/img/Hero_men.jpg")]' : "bg-[url('https://www.wallpapertip.com/wmimgs/13-132200_girl-red-hair-data-src-beauty-salon-images.jpg')]"} bg-cover bg-no-repeat h-screen lg:h-[60vw] bg-center mt-14 md:rounded-br-[150px] lg:mt-16 text-white`}>
      <div className={`flex flex-col gap-6 md:gap-8 lg:gap-10 h-full px-10 md:px-16 lg:px-28 ${male ?  'justify-end text-center items-center pb-10 w-[100%] md:w-[80%] lg:w-[70%] ' : 'justify-center w-[300px] md:w-[400px] lg:w-[600px]'}`}>
        <h1 className="text-4xl lg:text-6xl font-serif font-semibold">
          {male ? 'Style and Tradition in every Haircut' : 'Blonde & Highlight'}
        </h1>
        <h1>{male ? 'Discover an unforgettable experience where style meets tradition and every haircut becomes a statement of your individuality.' : 'Divide your UNIQUENESS by your hair'}</h1>
        <div className="bg-black rounded-lg p-6 md:p-8 lg:p-10 border border-white flex flex-col gap-2 md:gap-4 lg:gap-6">
          <h3>Your First Time?</h3>
          <h4 className="uppercase">
            <span className="text-3xl md:text-4xl ">-20%</span> for the first classic {male ? 'haircut' : 'hair coloring'}
          </h4>
          <Link
            className={`bg-white text-black text-center font-bold rounded-lg border-pink-300 cursor-pointer p-2 hover:scale-95`}
            href={"/booking"}
          >
            <h2>Book An Appointment</h2>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
