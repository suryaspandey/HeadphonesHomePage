import React from "react";
import { integrations, scrollVariant } from "./constants";
import { IntegrationCard } from "../IntegrationCard/integrationCard";
import { motion } from "framer-motion";
export const Integrations = () => {
  return (
    <>
      <section className=" container bg-white dark:bg-gray-900 py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-x-0 md:gap-x-16 space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-3xl font-bold font-poppins">Audio Ecosystem</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Plays well with
              <span className="text-red-600"> others</span>. Seamlessly connect
              with your favorite tools.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4">
              {integrations.map((int) => (
                <span
                  key={int.name}
                  className="inline-flex items-center px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm"
                >
                  {int.name}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/3 flex gap-x-2 md:gap-x-6">
            <div className="w-1/2 overflow-hidden">
              <motion.div
                className="-rotate-3 flex flex-col space-y-6 h-64 md:h-80"
                variants={scrollVariant(1)}
                animate="animate"
              >
                {integrations.map((int) => (
                  <motion.div
                    key={int.name}
                    className="-rotate-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IntegrationCard integration={int} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="w-1/2 overflow-hidden">
              <motion.div
                className="-rotate-3 flex flex-col space-y-6 h-64 md:h-80"
                variants={scrollVariant(-1)}
                animate="animate"
              >
                {integrations.map((int) => (
                  <motion.div
                    key={int.name + "-col2"}
                    className="-rotate-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IntegrationCard integration={int} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
