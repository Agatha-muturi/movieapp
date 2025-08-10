import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetails from "./pages//details.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🎬 Movie App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;