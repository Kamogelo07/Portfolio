import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
