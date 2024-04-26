import React from "react";
import { Props } from "./Nav";
import HorizontalScroll from "./Scroller";

const reviewsMen = [
  {
    id: 1,
    author: "Ketan V.",
    text: "I discovered À-ONÈ and I couldn't be happier! Their modern haircuts and traditional shaving are top notch. The atmosphere is friendly and the staff is attentive to your preferences. A place where I always feel welcome!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 2,
    author: "Anuj G.",
    text: "I don't think I've ever had a shave as comfortable and accurate as the one at Barbershop. The products used are top quality and the staff is professional and kind. A place worth every penny!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 3,
    author: "Saurabh P.",
    text: "An unforgettable experience at À-ONÈ! My stylist understood exactly what I wanted and gave me the best haircut of my life. The relaxed atmosphere and attention to detail turned a simple visit to the barber shop into a moment special.",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 4,
    author: "Karan P.",
    text: "Extremely happy with the service at À-ONÈ. The team is incredible and their haircuts are always flawless. The beard products I have purchased have done wonders. I highly recommend this place!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 5,
    author: "Shivam K.",
    text: "The premium services at À-ONÈ are absolutely outstanding. They completely transformed the texture of my hair. A high class barbering experience that I highly recommend!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 6,
    author: "Ketan V.",
    text: "I discovered À-ONÈ and I couldn't be happier! Their modern haircuts and traditional shaving are top notch. The atmosphere is friendly and the staff is attentive to your preferences. A place where I always feel welcome!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 7,
    author: "Ketan V.",
    text: "I discovered À-ONÈ and I couldn't be happier! Their modern haircuts and traditional shaving are top notch. The atmosphere is friendly and the staff is attentive to your preferences. A place where I always feel welcome!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  },
  {
    id: 8,
    author: "Ketan V.",
    text: "I discovered À-ONÈ and I couldn't be happier! Their modern haircuts and traditional shaving are top notch. The atmosphere is friendly and the staff is attentive to your preferences. A place where I always feel welcome!",
    stars: 5,
    image: "https://res.cloudinary.com/ddmxmmot6/image/upload/v1714139677/vsco_032624_lxsasv.jpg",
  }
];

const Reviews: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <h2 className="font-bold text-3xl lg:text-5xl uppercase">
          Our Customer`s Opinion
        </h2>
        <h5>
          Find out what our customers think about{" "}
          {props.sex === "male" ? "À-ONÈ" : "Ayesha"}. Their words are authentic
          testimonies of the experiences lived in our barber chair. Learn how
          we`ve earned the trust and satisfaction of our clients by creating not
          just haircuts and styles, but connections and smiles. Real voices,
          authentic experiences _ at {props.sex === "male" ? "À-ONÈ" : "Ayesha"}
        </h5>
      </div>
      <HorizontalScroll reviews={reviewsMen} />
    </div>
  );
};

export default Reviews;
