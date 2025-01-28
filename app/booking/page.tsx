"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useContext, useEffect } from "react";
import { GenderContext } from "../layout";
import InfoSection from "@/components/InfoSection";

export default function MyApp() {
  const gender = useContext(GenderContext);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi("cal_live_376bbc105bc45425ecff5921c0f4f3e9");
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
        document.title = gender === "male" ? "À-ONÈ | Booking" : "ÀYÈSHÀ_ | Booking";
      }, [gender]);

  return (
    <div
      className={`${
        gender === "male" ? "bg-black" : "bg-[#ee95599d]"
      } text-white p-6 md:p-8 lg:p-10 md:py-10 lg:py-16 flex flex-col gap-6 lg:gap-10`}
    >
      <h1 className="text-5xl uppercase font-thin">Book Now</h1>
      <p className="opacity-70 tracking-wide">
      Use the portal below to book your Appointment
      </p>
      <p className="opacity-70 tracking-wide lg:w-[80vw] mx-auto">
      *Please note: Online booking window is three months - to book beyond three months, please contact your stylist directly.
      </p>
      <Cal
        calLink="darth-vader-xmqjwq/salon-appointment"
        style={{ width: "100%", height: "100%", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
      <InfoSection sex={gender}/>
    </div>
  );
}
