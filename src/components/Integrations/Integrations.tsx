import React from "react";
import { integrations } from "./constants";
import { IntegrationCard } from "../IntegrationCard/integrationCard";
export const Integrations = () => {
  return (
    <>
      <section className="bg-white overflow-hidden scroll-">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Integrations
          </h1>
          <h2>
            Plays well with <span className="text-lime-400">others</span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            temporibus pariatur ab quam numquam excepturi eos libero vero
            aliquam voluptatum.
          </p>
          <div className="h-[400px] overflow-hidden">
            <IntegrationCard integrations={integrations} />
            <IntegrationCard
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
            />
          </div>
        </div>
      </section>
    </>
  );
};
