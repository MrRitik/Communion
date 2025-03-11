import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaChevronRight } from "react-icons/fa";

const faqs = [
  {
    question: "What is the Communion app?",
    answer:
      "The Communion app is a platform for fostering social cohesion through community events and engagement.",
  },
  {
    question: "How does it promote social cohesion?",
    answer:
      "By bringing people together through local events and social interactions.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, the app is completely free for everyone.",
  },
  {
    question: "Can I meet new people?",
    answer:
      "Absolutely! The app encourages social interactions and connections.",
  },
  {
    question: "What if I have more questions?",
    answer: "Feel free to reach out to our support team through the app.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-12 flex flex-col lg:flex-row gap-6 justify-between">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="items-center mb-6 lg:w-1/3"
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Frequently Asked Questions
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 mt-4 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition flex items-center gap-2"
        >
          View All <FaChevronRight />
        </motion.button>
      </motion.div>
      <div className="space-y-4 w-full lg:w-2/3">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-md p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaPlus className="text-gray-600" />
              </motion.div>
            </div>
            {activeIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 overflow-hidden"
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
