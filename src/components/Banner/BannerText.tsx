import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return (
    <section className="py-10 text-center m-2 font-varela">
      <div className=" container p-8 bg-gradient-to-t from-primary to-primary/70 rounded-3xl opacity-1 hover:scale-105 hover:duration-150 hover:shadow-2xl ">
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
