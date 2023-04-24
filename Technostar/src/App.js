import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "../src/styles/App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
