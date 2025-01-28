import React from "react";
import { ServicesData } from "./constants";
import { UpdateFollower } from "react-mouse-follower";
import { ServiceCard } from "./ServiceCard";

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8 ">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-10">Services</h1>
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
