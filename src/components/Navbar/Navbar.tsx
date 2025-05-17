import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#services",
  },
  {
    id: 6,
    title: "Featured",
    link: "#featured",
  },
  {
    id: 3,
    title: "Blog",
    link: "#blog",
  },
  {
    id: 4,
    title: "FAQ",
    link: "#faq",
  },
  {
    id: 5,
    title: "Contact",
    link: "#footer",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-brandDark text-white font-varela dark:bg-white fixed top-0 bottom-0 left-0 w-40 z-50 shadow-lg flex flex-col transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        } md:translate-x-0`}
      >
        <div className="mt-16 md:mt-0 p-4 flex flex-col items-starts">
          <div className="flex items-center gap-3">
            <a href="#" className="text-xl font-bold uppercase dark:text-black">
              L I S T N
            </a>
            <button className="text-xl dark:text-black hover:bg-gray-700 hover:text-white transition-all duration-200 rounded-full p-1">
              <SlEarphones />
            </button>
          </div>

          <span className="font-light lowercase text-gray-400 text-xs italic mt-1">
            Hear the difference
          </span>
        </div>

        <div className="flex-grow flex flex-col items-center justify-center space-y-6">
          {NavbarMenu.map((item) => (
            <UpdateFollower
              key={item.id}
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <a
                href={item.link}
                className="text-sm uppercase text-white dark:text-black px-4 py-3 hover:text-white transition-all duration-200 rounded-md text-center w-full"
              >
                {item.title}
              </a>
            </UpdateFollower>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-4xl text-white dark:text-black bg-gray-400 rounded-sm shadow-md transition-all duration-200"
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
