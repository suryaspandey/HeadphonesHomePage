import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoWifiOutline } from "react-icons/io5";
import { PiBluetooth } from "react-icons/pi";
import { IoBatteryDeadOutline } from "react-icons/io5";

export const featuredProducts = [
  {
    id: 1,
    name: "Noise Cancelling Headphones",
    description: "Immersive sound, long battery life, wireless freedom.",
    price: "$149",
    image: Headphone1,
    rating: 4.5,
    inStock: true,
    feature1: "Noise Cancellation",
    feature2: "40h Battery Life",
    feature3: "Premium Sound",
    feature1Icon: HiOutlineSpeakerWave,
    feature2Icon: IoBatteryDeadOutline,
    feature3Icon: PiBluetooth,
  },
  {
    id: 2,
    name: "Bass Boost Headphones",
    description: "Deep bass for an intense audio experience.",
    price: "$99",
    image: Headphone2,
    rating: 4.2,
    inStock: true,
    feature1: "Deep Bass",
    feature2: "30h Battery Life",
    feature3: "Water Resistant",
    feature1Icon: HiOutlineSpeakerWave,
    feature2Icon: IoBatteryDeadOutline,
    feature3Icon: IoWifiOutline,
  },
  {
    id: 3,
    name: "Gaming Headset Pro",
    description: "Crystal clear mic and surround sound for gamers.",
    price: "$129",
    image: Headphone3,
    rating: 4.8,
    inStock: true,
    feature1: "UltraLight Air",
    feature2: "25h Battery Life",
    feature3: "Voice Assistant",
    feature1Icon: IoWifiOutline,
    feature2Icon: IoBatteryDeadOutline,
    feature3Icon: PiBluetooth,
  },
];
