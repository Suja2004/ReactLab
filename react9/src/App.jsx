import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "blue" : "black",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div className="pages">
      <div className="navbar">
        <span className="logo">Router</span>
        <nav>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
