import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import logo from "../assets/logoIn.png";
import javaScript from "../assets/event1.jpg";
import sell from "../assets/SignIn.png";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around px-6 lg:px-20 mt-10 lg:mt-20 py-8 lg:py-16 bg-white">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center lg:items-start w-full lg:w-1/2"
      >
        <h1 className="text-3xl lg:text-5xl font-bold text-black text-center lg:text-left">
          Connect Communities
        </h1>
        <p className="text-base lg:text-lg text-gray-500 mt-2 text-center lg:text-left">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center mt-4 gap-2 justify-center lg:justify-start"
        >
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
            🔵 Unlimited Advantages
          </span>
        </motion.div>

        <div className="text-center lg:text-left mt-6">
          <span className="flex flex-col lg:flex-row items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-5xl leading-8 lg:leading-10 font-extrabold"
            >
              Unite, Innovate,
            </motion.h2>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="rounded-3xl overflow-hidden w-10 lg:w-12 h-10 lg:h-12"
            >
              <img src={img4} alt="Avatar 1" />
            </motion.div>
          </span>
          <h2 className="text-3xl lg:text-5xl leading-8 lg:leading-12 font-extrabold">
            Connect, Inspire
          </h2>
          <span className="flex flex-col lg:flex-row gap-2 lg:gap-3 items-center pt-2 justify-center lg:justify-start">
            <h2 className="text-3xl lg:text-5xl font-extrabold">Together</h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center -space-x-3 bg-blue-200 rounded-4xl p-2"
            >
              <div className="rounded-full overflow-hidden w-10 lg:w-12 h-10 lg:h-12">
                <img src={img1} alt="Avatar 1" />
              </div>
              <div className="rounded-full overflow-hidden w-10 lg:w-12 h-10 lg:h-12">
                <img src={img2} alt="Avatar 2" />
              </div>
              <div className="rounded-full overflow-hidden w-10 lg:w-12 h-10 lg:h-12">
                <img src={img3} alt="Avatar 3" />
              </div>
              <p className="text-gray-800 font-bold pl-2 lg:pl-6">+8 people</p>
            </motion.div>
          </span>

          <p className="text-gray-600 mt-4 max-w-md lg:max-w-xl text-center lg:text-left">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 lg:mt-8 px-4 lg:px-6 py-2 lg:py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
        >
          View Our Services →
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <div className="flex -space-x-20 md:space-x-0 gap-2 lg:gap-4 mt-20 lg:mt-0">
        <motion.div
          whileHover={{ scale: 1.1, y: -10 }}
          className="rounded-full overflow-hidden w-40 lg:w-52 h-60 lg:h-80"
        >
          <img src={sell} alt="Event 1" className="object-cover" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: -10 }}
          className="rounded-full overflow-hidden w-40 lg:w-52 h-60 lg:h-80"
        >
          <img src={logo} alt="Event 2" className="object-cover" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: -10 }}
          className="rounded-full overflow-hidden w-40 lg:w-52 h-60 lg:h-80"
        >
          <img src={javaScript} alt="Event 3" className="object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
