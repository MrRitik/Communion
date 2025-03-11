import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Allroute from "./routes/Allroute";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Allroute />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
