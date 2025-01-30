import { easeInOut } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -180,
    },
    show: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};
