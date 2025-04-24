import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9, rotate: 20 }}
    className="fixed top-4 right-4  p-3 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-full shadow-md transition-transform duration-200"
  >
    <AnimatePresence mode="wait" initial={false}>
      {theme === "light" ? (
        <motion.div
          key="moon"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaMoon className="text-gray-800 w-5 h-5" />
        </motion.div>
      ) : (
        <motion.div
          key="sun"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaSun className=" w-5 h-5" />
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

export default ThemeToggle;
