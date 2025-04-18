import React from "react";
import Headphone4 from "../../assets/headphone4.png";
import { AnimatePresence, motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUpEffect } from "../utilities/fadeUpEffect";
import { fadeUp } from "./constants";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              exit="exit"
            >
              <img
                src={Headphone4}
                alt="Headphone"
                className="w-[300px] md:w-[400px] "
              />
            </motion.div>
          </AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
            className="flex flex-cols justify-center items-center"
          >
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUpEffect(0.5)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest Headphones With The Latest Technology
              </motion.h1>

              <motion.p
                variants={fadeUpEffect(0.7)}
                initial="hidden"
                whileInView="show"
              >
                Not just headphones — a refined listening experience. With sleek
                design, adaptive noise cancellation, and rich, balanced sound,
                LISTN delivers more than just music. It’s where technology meets
                simplicity. <br/>
                <span className="font-bold italic">
                  Comfortable. Powerful. Beautifully quiet.
                  </span>
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  mixBlendMode: "difference",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUpEffect(0.75)}
                  initial="hidden"
                  whileInView="show"
                  className="rounded-md border p-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white"
                >
                  Learn More
                </motion.button>
              </UpdateFollower>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Banner;
