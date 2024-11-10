import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Login from "./pages/login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
