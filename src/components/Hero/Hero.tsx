import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, motion } from "framer-motion";
import { heroFadeUp, headphoneData } from "./constants";

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);

  const handleActiveData = (item) => {
    setActiveData(item);
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela dark:bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 10,
                    mixBlendMode: "difference",
                    rotate: -720,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={heroFadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela dark:text-black"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={heroFadeUp(0.3)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm text-white/80 dark:text-black"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 999,
                    followSpeed: 0.5,
                    scale: 5,
                    rotate: -720,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} alt={activeData.title} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={heroFadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{
                      backgroundColor: activeData.bgColor,
                    }}
                    className="px-4 py-2 font-normal rounded-sm"
                  >
                    Buy and Listen
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                <div className="w-20 h-[1px] bg-white dark:bg-black"></div>
                <p className="uppercase text-sm dark:text-black">Top Headphones for you</p>
                <div className="w-20 h-[1px] bg-white dark:bg-black"></div>
              </div>
              <div className="grid grid-cols-3 gap-10">
                {headphoneData.map((item) => {
                  return (
                    <UpdateFollower
                      key={item.id}
                      mouseOptions={{
                        backgroundColor: item.bgColor,
                        zIndex: 999,
                        followSpeed: 0.5,
                        scale: 5,
                        text: "View Details",
                        textFontSize: "2px",
                      }}
                    >
                      <div
                        key={item.id}
                        className="grid grid-cols-2 cursor-pointer place-items-center"
                        onClick={() => handleActiveData(item)}
                      >
                        <div>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[200px]"
                          />
                        </div>
                        <div className="space-y-2 dark:text-black">
                          <p className="text-base font-bold">{item.price}</p>
                          <p className="text-xs font-normal">{item.model}</p>
                        </div>
                      </div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, scale: 0.9, y: 100 }}
                src={activeData.image}
                alt={activeData.title}
                className="w-[300px] md:w-[400px] xl:w-[550px]"
              />
            </AnimatePresence>
          </div>
          <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 mix-blend-difference z-99999">
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
