import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6 dark:text-black"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae ut deserunt officiis, quisquam hic quasi nam quod
                dolores consequuntur porro!
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +1 (123) 456 789
                </p>
                <p className="flex items-center gap-2 mt-2">
                  <FaMapLocation /> Bangalore, Karnataka
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold dark:text-black">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 dark:text-black">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold dark:text-black">Follow Us</h1>
              <div className="flex items-center gap-3 ">
                <FaFacebook className="text-3xl hover:scale-105 duration-300 dark:text-black" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300 dark:text-black" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300 dark:text-black" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300 dark:text-black" />
              </div>
              <div className="space-y-2 dark:text-black">
                <p>Payment Methods</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          <p className="text-white mt-6 text-center border-t-2 pt-8 dark:text-black">
            © 2025. All Rights Reserved | Surya Pandey Headphones
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
