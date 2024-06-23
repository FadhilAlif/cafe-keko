"use client";

import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  const handleVisit = () => {
    window.location.href = "https://maps.app.goo.gl/C5GeLoHAGb3qCbcf8";
  };

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 animate-fade-in-up">
        <h1 className="bold-52 lg:bold-88 animate-slide-in-left">
          Cafe Keko Indonesia
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] animate-fade-in-up">
          Cafe Keko Indonesia, where relaxation meets productivity. Enjoy our
          finest locally-sourced coffee or utilize our inspiring co-working
          space. With high-speed internet and comfortable seating, The perfect
          spot to work, meet, and collaborate. Join us and let your ideas flow
          with the best coffee.
        </p>

        <div className="my-11 flex flex-col w-full gap-3 sm:flex-row animate-fade-in-up">
          <Button
            type="button"
            icon="/location.svg"
            title="Visit Us"
            variant="btn_green hover:bg-green-600"
            onClick={handleVisit}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-1 items-start animate-fade-in-up">
        <div className="relative w-full h-full xl:h-[500px]">
          <Image
            src="/outdoor-keko.jpg"
            alt="Cafe Keko Indonesia"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
