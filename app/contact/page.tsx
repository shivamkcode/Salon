"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { GenderContext } from "../layout";
import InfoSection from "@/components/InfoSection";

const Contact = () => {
  const gender = useContext(GenderContext);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Shivam",
          from_email: form.email,
          to_email: "shivambaniya12@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setIsLoading(false);
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    document.title =
      gender === "male" ? "À-ONÈ | Contact" : "ÀYÈSHÀ_ | Contact";
  }, [gender]);

  return (
    <div
      className={`${
        gender === "male" ? "bg-black" : "bg-[#7a722b69]"
      } text-white sm:text-center p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10`}
    >
      <h1 className="text-5xl uppercase font-thin">Contact Us</h1>
      <div className={` flex flex-col md:flex-row md:text-start gap-16 `}>
        <div className={` flex flex-col lg:justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 flex-1`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-extralight">
            Send us a quick message!
          </h2>
          <p className="tracking-widest lg:leading-loose opacity-75">
            Please use the contact form below to get in touch with us. Please
            note that if you need to book a time-sensitive appointment or need
            an immediate response from us, calling the salon is best. Otherwise,
            if you have a quick question or booking inquiry that is not urgent,
            feel free to get in touch with us using the quick and easy form
            below. We’d love to hear from you!
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 flex-1"
        >
          <label className="text-white font-semibold flex items-start flex-col gap-2 cursor-pointer">
            Name
            <input
              type="text"
              name="name"
              autoComplete="on"
              className="p-2 rounded-lg rounded-tl-none rounded-br-none w-full text-black capitalize font-normal hover:scale-[99%]"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-white font-semibold flex items-start flex-col gap-2 cursor-pointer">
            Email
            <input
              type="email"
              name="email"
              autoComplete="on"
              className="p-2 rounded-lg rounded-tl-none rounded-br-none w-full text-black capitalize font-normal hover:scale-[99%]"
              placeholder="john@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label className="text-white font-semibold flex items-start flex-col gap-2 cursor-pointer">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="p-2 rounded-lg rounded-tl-none rounded-br-none w-full text-black capitalize font-normal hover:scale-[99%]"
              placeholder="Let me know how WE can help you!"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className={`${
              gender === "male" ? "bg-white text-black" : "bg-black text-white"
            } text-center font-bold rounded-bl-xl rounded-tr-xl border-pink-300 cursor-pointer p-2 hover:scale-95 my-4`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
      <InfoSection sex={gender} />
    </div>
  );
};

export default Contact;
