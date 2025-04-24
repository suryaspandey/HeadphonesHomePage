import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return (
    <section className="py-10 text-center font-varela dark:bg-gray-100">
      <div
        className="
      container mx-auto p-8 
      bg-gradient-to-t from-primary to-primary/70 
      dark:bg-gradient-to-b dark:from-orange-700 dark:to-orange-950 
      rounded-3xl 
      transition-transform transition-shadow duration-150 
      hover:scale-105 hover:shadow-2xl 
      dark:hover:shadow-black/40
    "
      >
        <UpdateFollower
          mouseOptions={{
            backgroundColor: "black",
            zIndex: 9999,
            followSpeed: 0.5,
            mixBlendMode: "difference",
            scale: 8,
          }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white flex justify-center leading-normal">
            Headphones With Good Quality And Affordable Price
          </h1>
        </UpdateFollower>
      </div>
    </section>
  );
};

export default BannerText;
