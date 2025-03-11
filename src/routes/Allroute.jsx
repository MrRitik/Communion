import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import EventPage from "../pages/EventPage";

const Allroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/event" element={<EventPage />}/>
    </Routes>
  );
};

export default Allroute;
