import { fadeUpEffect } from "../utilities/fadeUpEffect";
import { motion } from "framer-motion";
import React from "react";
import { UpdateFollower } from "react-mouse-follower";

export const ServiceCard = ({ service }) => {
  return (
    <UpdateFollower
      mouseOptions={{
        backgroundColor: "white",
        zIndex: 999,
        followSpeed: 0.5,
        scale: 5,
        rotate: 720,
        mixBlendMode: "darken",
        backgroundElement: (
          <div>
            <img src={service.icon} alt={service.title} />
          </div>
        ),
      }}
    >
      <motion.div
        variants={fadeUpEffect(service.delay)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col  max-w-[300px] p-5 shadow-lg justify-center items-center mb-4 rounded-xl bg-white"
      >
        <img src={service.icon} alt={service.title} className="w-24 mb-4" />
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-bold flex justify-center dark:text-black">
            {service.title}
          </h1>
          <p className="text-center text-sm text-black/75">{service.desc}</p>
        </div>
      </motion.div>
    </UpdateFollower>
  );
};
