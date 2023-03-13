import React from "react";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky bg-white text-gray-900 dark:bg-gray-900 dark:text-white z-50">
      <nav className="flex justify-between items-center p-5">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-lg font-bold hover:scale-110 duration-150 text-blue-600 hover:text-orange-500">
            <a
              className="font-extralight cursor-pointer z-0 uppercase"
              href="mailto:mukul.dharashivkar99@gmail.com"
            >
              <AiOutlineMail className="inline-block text-2xl" /> Mail Me!
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdWbSunny className="text-2xl cursor-pointer text-orange-500 hover:scale-125 duration-200" />
            ) : (
              <MdNightsStay className="text-2xl cursor-pointer text-blue-600 hover:scale-125 duration-200" />
            )}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
