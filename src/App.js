import "./App.css";
import Navigation from "./Navigation";
import Donate from "./Donate";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Vision from "./Vision";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/donations" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
