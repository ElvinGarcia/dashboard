// import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/header" element={<Header />} />
      <Route path="/footer" element={<Footer />} />
      </Routes>

    </div>
  );
}

export default App;
