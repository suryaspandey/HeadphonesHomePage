import React from "react";
import { ServicesData } from "./constants";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import { fadeUpEffect } from "../utilities/fadeUpEffect";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="bg-gray-100 dark:bg-black font-poppins py-8 "
      >
        <div className="container py-14">
          <motion.h1
            variants={fadeUpEffect(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center ">
            {ServicesData.map((service) => {
              return (
                <>
                  <ServiceCard service={service} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
