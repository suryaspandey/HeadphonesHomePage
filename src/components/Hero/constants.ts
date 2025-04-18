import { easeInOut } from "framer-motion";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";

export const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "LISTN Pro Series",
    subtitle:
      "Experience crystal-clear audio and deep bass with the latest technology, designed for comfort and style. Perfect for every moment, from work to play.",
    price: "$100",
    model: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "LISTN Echo Series",
    subtitle:
      "Seamless wireless connection, immersive sound, and a sleek design — LISTN headphones elevate every listening experience with precision and style.",
    price: "$100",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "LISTN Wave Series",
    subtitle:
      "Feel every note with advanced noise cancellation and unrivaled sound quality. LISTN headphones are built for those who demand the best in audio technology.",
    price: "$100",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

export const heroFadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
