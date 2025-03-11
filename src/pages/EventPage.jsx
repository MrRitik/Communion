import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import sell from "../assets/sellBussiness.jpeg";
import java from "../assets/javaScript.jpeg";
import bg from "../assets/bg.jpg";
import High from "../assets/High-income.png";
import FAQAccordion from "../components/FAQAccordion";

const events = [
  {
    id: 1,
    title: "Christmas Charity Drive",
    date: new Date(2025, 2, 15, 5, 30),
    location: "Community Center",
    category: "Donation",
    image: sell,
  },
  {
    id: 2,
    title: "Eid-ul-Fitr",
    date: new Date(2025, 2, 30, 5, 30),
    location: "Main Mosque",
    category: "Free",
    image: java,
  },
  {
    id: 3,
    title: "Mahavir Jayanti",
    date: new Date(2025, 2, 17, 3, 30),
    location: "Jain Temple",
    category: "Free",
    image: bg,
  },
  {
    id: 4,
    title: "Good Friday Service",
    date: new Date(2025, 3, 18, 5, 30),
    location: "Church Hall",
    category: "Free",
    image: High,
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-sm">
      <img src={event.image} alt={event.title} className="rounded-md mb-3" />
      <div className="text-gray-700">
        <span className="text-sm bg-blue-100 text-blue-600 rounded-full px-2 py-1">
          {event.category}
        </span>
        <h3 className="text-xl font-semibold my-2">{event.title}</h3>
        <p className="flex items-center gap-2">
          <FaCalendarAlt /> {event.date.toDateString()}
        </p>
        <p className="flex items-center gap-2">
          <FaClock /> {event.date.toLocaleTimeString()}
        </p>
        <button className="mt-3 bg-gray-900 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 transition">
          Event Details 
        </button>
      </div>
    </div>
  );
};

const EventPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents = events.filter((event) => {
    const now = new Date();
    switch (filter) {
      case "Today":
        return event.date.toDateString() === now.toDateString();
      case "Tomorrow":
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        return event.date.toDateString() === tomorrow.toDateString();
      case "This Week":
        const weekEnd = new Date();
        weekEnd.setDate(now.getDate() + 7);
        return event.date >= now && event.date <= weekEnd;
      case "Next Week":
        const nextWeekStart = new Date();
        nextWeekStart.setDate(now.getDate() + 7);
        const nextWeekEnd = new Date();
        nextWeekEnd.setDate(now.getDate() + 14);
        return event.date >= nextWeekStart && event.date <= nextWeekEnd;
      case "This Month":
        return event.date.getMonth() === now.getMonth();
      default:
        return true;
    }
  });

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-6 justify-center">
        {[
          "All Event",
          "Today",
          "Tomorrow",
          "This Week",
          "Next Week",
          "This Month",
        ].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-4 py-2 rounded-full border ${
              filter === btn
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            } transition`}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="text-center text-gray-700 py-24 col-span-full">
            No events available
          </p>
        )}
      </div>
      <div className="my-20">

      <FAQAccordion />
      </div>
    </div>
  );
};

export default EventPage;
