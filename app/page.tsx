"use client";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import LookBook from "@/components/LookBook";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import { useContext } from "react";
import { GenderContext } from "./layout";

export default function Home() {
  const gender = useContext(GenderContext);
  
  return (
    <>
      {(gender && gender !== 'none') && (
        <main
          className={`${
            gender === "male"
              ? "bg-black opacity-95 text-white"
              : "bg-[#595959] text-black"
          } sm:text-center `}
        >
          <Hero sex={gender} />
          <InfoSection sex={gender} />
          <div className="bg-[#ffffff1c] p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="font-bold text-3xl lg:text-5xl uppercase">
                Make your own momentum
              </h2>
              <h5 className="text-white">
                {gender === "male"
                  ? "Every haircut, every shave and every experience spent with us are not just services, but stages in a common journey towards confidence and happiness. We are proud to be a part of your story and excited to build another year of smiles and satisfaction together."
                  : "Experience the ultimate in hair care with our beauty salon`s wide range of hair services, including cuts, color, styling, and extensions. Our experienced stylists use only the highest quality products to ensure your hair looks and feels its best. Visit us today and discover the perfect style for you."}
              </h5>
              <div className="flex flex-col sm:flex-row sm:justify-center gap-10 my-10">
                <div className="flex flex-col gap-2">
                  <h2
                    className={`text-6xl font-bold sm:text-center ${
                      gender === "male"
                        ? "text-[#e7edbd]"
                        : "text-white opacity-85"
                    }`}
                  >
                    2
                  </h2>
                  <h2 className="text-2xl">Years Experience</h2>
                </div>
                <div className="flex flex-col gap-2">
                  <h2
                    className={`text-6xl font-bold sm:text-center ${
                      gender === "male"
                        ? "text-[#e7edbd]"
                        : "text-white opacity-85"
                    }`}
                  >
                    100+
                  </h2>
                  <h2 className="text-2xl">Satisfied Customers</h2>
                </div>
              </div>
            </div>
            <div
              className={`flex-1 min-h-[100vw] sm:min-h-[50vw] md:min-h-0 ${
                gender === "male"
                  ? "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714133319/IMG_COM_20240426_0803_56_5331_zigxgw.jpg)]"
                  : "bg-[url(https://res.cloudinary.com/ddmxmmot6/image/upload/v1714233375/shari-sirotnak-oM5YoMhTf8E-unsplash_pje8rw.jpg)] opacity-80"
              } bg-cover bg-no-repeat bg-center border filter grayscale hover:grayscale-0 transition duration-500`}
            >
            </div>
          </div>
          <Services sex={gender} />
          <Reviews sex={gender} />
          <LookBook sex={gender} />
        </main>
      )}
    </>
  );
}
