import React, { useState } from "react";
import { FaUsers, FaBolt, FaChartLine } from "react-icons/fa";
import { FaArrowRightLong, FaArrowDownLong } from "react-icons/fa6";

const WhyCommunionRocks = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setHovered(buttonId);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-24">
      <h2 className="md:text-5xl text-3xl font-bold mb-8 text-center">
        Why Communion Rocks!
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="max-w-lg text-center lg:text-left">
          <p className="md:text-xl mb-6">
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
          <button
            className="mt-4 mx-auto md:mx-0 px-6 py-3 flex items-center gap-3 bg-white text-gray-900 rounded-full shadow-md hover:bg-gray-200 transition"
            onMouseEnter={() => handleMouseEnter("whyJoin")}
            onMouseLeave={handleMouseLeave}
          >
            Why Join Us?{" "}
            {hovered === "whyJoin" ? (
              <FaArrowDownLong className="transition-transform duration-300" />
            ) : (
              <FaArrowRightLong className="transition-transform duration-300" />
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Unifying Communities",
              description:
                "Communion bridges diverse religious communities, becoming the social hub of faith and unity.",
              icon: <FaUsers className="text-4xl mb-4 mx-auto" />,
              id: "unifying",
            },
            {
              title: "Innovative and Fun",
              description:
                "Experience faith in a fresh way through our interactive features, engaging events, and modern approach.",
              icon: <FaBolt className="text-4xl mb-4 mx-auto" />,
              id: "innovative",
            },
            {
              title: "Promoting Unity",
              description:
                "We foster understanding and harmony between different faith communities through meaningful engagement.",
              icon: <FaChartLine className="text-4xl mb-4 mx-auto" />,
              id: "promoting",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-md text-center"
            >
              {item.icon}
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
              <button
                className="mt-4 mx-auto px-4 py-2 border flex items-center gap-3 border-white rounded-full hover:bg-gray-700 transition"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                Learn More{" "}
                {hovered === item.id ? (
                  <FaArrowDownLong className="transition-transform duration-300" />
                ) : (
                  <FaArrowRightLong className="transition-transform duration-300" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyCommunionRocks;
