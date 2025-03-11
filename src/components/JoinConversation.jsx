import React from "react";
import { motion } from "framer-motion";
import sell from "../assets/sellBussiness.jpeg";
import java from "../assets/javaScript.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

const JoinConversation = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
        className="flex flex-col lg:flex-row justify-between gap-8"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Join the Conversation
          <br />
          <span className="text-blue-300">Build Connections</span>
        </h1>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-600 mt-2">
            Discover a vibrant community, share your thoughts, and connect with
            like-minded individuals. Together, we grow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition flex items-center gap-2"
          >
            Join Conversations →
          </motion.button>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between mt-8 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          variants={scaleUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:mt-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={sell}
              alt="Community 1"
              className="object-cover w-full h-full transition-transform"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={java}
              alt="Community 2"
              className="object-cover w-full h-full transition-transform"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.5 }}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
          Where Connections Thrive and Ideas Flourish ✨
        </h2>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 p-4 rounded-xl shadow-md text-center"
          >
            <p className="text-xl font-semibold">🌟 Happy Community</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 p-4 rounded-xl shadow-md text-center"
          >
            <p className="text-xl font-semibold">🚀 210% Boost in Engagement</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 p-4 rounded-xl shadow-md text-center"
          >
            <p className="text-xl font-semibold">🌍 172+ Ranked Communities</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default JoinConversation;
