import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "src/components/Hero";
import About from "src/components/About";

const App: React.FC = () => {
  return (
    <Router>
      <div className="w-full min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
