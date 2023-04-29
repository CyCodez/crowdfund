import "./App.css";
import {
  Donate,
  Home,
  About,
  Footer,
  Vision,
  NotFound,
  Navbar,
  Navigation,
} from "./components";

import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <Routes>
        <Route index element={<About />} />
        <Route path="/home" element={<About />} />
        <Route path="/about" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/donations" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
