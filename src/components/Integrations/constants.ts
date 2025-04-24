import { FaHeadphonesAlt } from "react-icons/fa";
import {
  FaApple,
  FaSpotify,
  FaSoundcloud,
  FaVideo,
  FaUsers,
  FaGamepad,
} from "react-icons/fa6";

export const integrations = [
  {
    name: "Spotify",
    icon: FaSpotify,
    description: "Stream high-fidelity audio playlists.",
  },
  {
    name: "Apple Music",
    icon: FaApple,
    description: "Access Apple’s vast music library.",
  },
  // { name: "Tidal", icon: FaTidal, description: "Hi-Res lossless streaming." },
  {
    name: "Boom 3D",
    icon: FaHeadphonesAlt,
    description: "Customize EQ profiles for any environment.",
  },
  {
    name: "SoundCloud",
    icon: FaSoundcloud,
    description: "Share and discover new tracks.",
  },
  {
    name: "Zoom",
    icon: FaVideo,
    description: "Crystal-clear voice calls and meetings.",
  },
  {
    name: "Discord",
    icon: FaUsers,
    description: "Low-latency chat for gamers.",
  },
  {
    name: "Steam",
    icon: FaGamepad,
    description: "In-game chat and audio enhancement.",
  },
];

export const scrollVariant = (direction = 1) => ({
  animate: {
    y: direction > 0 ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 6,
        ease: "linear",
      },
    },
  },
});
