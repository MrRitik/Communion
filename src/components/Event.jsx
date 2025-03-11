import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logoIn.png";
import bg from "../assets/bg.jpg";
import os from "../assets/os.jpeg";
import hockey from "../assets/hockey.jpeg";
import javaScript from "../assets/event1.jpg";
import sell from "../assets/SignIn.png";
import sellBussiness from "../assets/sellBussiness.jpeg";
import High from "../assets/High-income.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

const hoverEffect = {
  scale: 1.08,
  transition: { duration: 0.3 },
};

const Event = () => {
  return (
    <div className="bg-gray-800 p-8 lg:p-16">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h1 className="font-extrabold text-white text-4xl lg:text-6xl">
          Uniting Communities Through
        </h1>
        <h1 className="font-extrabold text-blue-300 text-4xl lg:text-6xl">
          ✦ Inspiring Events
        </h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row mt-8 lg:mt-16 gap-4">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeInUp}
          className="text-white text-lg lg:text-2xl gap-4"
        >
          At Communion, we're committed to organizing events that foster
          connections, inspire personal and professional growth, and bring
          people together to share meaningful experiences. From workshops to
          conferences, every event is designed to leave a lasting impact on our
          attendees.
        </motion.div>
        <div>
          <div className="flex items-center justify-center lg:justify-start -space-x-3 rounded-4xl p-2">
            {[img1, img2, img3, img4].map((img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.1 }}
                variants={scaleUp}
                whileHover={hoverEffect}
                className="rounded-full overflow-hidden w-8 lg:w-12 h-8 lg:h-12"
              >
                <img src={img} alt={`Avatar ${index + 1}`} />
              </motion.div>
            ))}
            <p className="text-white font-bold text-lg lg:text-xl pl-2 lg:pl-6">
              Trusted by Over 15k+ Individuals Worldwide
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-8 bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 rounded-2xl overflow-hidden shadow-lg">
          {[logo, javaScript, sell, High, sellBussiness, bg, os, hockey].map(
            (img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: index * 0.1 }}
                variants={scaleUp}
                whileHover={hoverEffect}
                className={`col-span-${index === 3 ? 2 : 1} row-span-${
                  index === 2 ? 2 : 3
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="object-cover w-full h-full rounded-xl"
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
