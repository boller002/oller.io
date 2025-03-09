// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/sample-post" element={<Post />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
