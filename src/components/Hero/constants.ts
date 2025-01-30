import { easeInOut } from "framer-motion";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";

export const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless 1",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi debitis minus illum quam nihil reiciendis inventore consequatur dicta repellendus eum quisquam delectus, tempore itaque laudantium officiis incidunt ad ipsam?",
    price: "$100",
    model: "Model Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi debitis minus illum quam nihil reiciendis inventore consequatur dicta repellendus eum quisquam delectus, tempore itaque laudantium officiis incidunt ad ipsam?",
    price: "$100",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    subtitle:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi debitis minus illum quam nihil reiciendis inventore consequatur dicta repellendus eum quisquam delectus, tempore itaque laudantium officiis incidunt ad ipsam?",
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
